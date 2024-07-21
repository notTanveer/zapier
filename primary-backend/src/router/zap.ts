import { Router } from "express"
import { authMiddleware } from "../middleware";
import { ZapCreateSchema } from "../types";
import { prismaClient } from "../db";

const router = Router();

router.post("/", authMiddleware, async (req, res) => {
    const body = req.body;
    // @ts-ignore
    const id = req.id;
    const parsedData = ZapCreateSchema.safeParse(body);

    if (!parsedData.success) {
        return res.status(411).json({
            message: "Invalid data",
        });
    }

    const zapId = await prismaClient.$transaction(async tx => {
        const zap = await tx.zap.create({
            data: {
                id: id,
                triggerId: "",
                actions: {
                    create: parsedData.data.actions.map((x, index) => ({
                        actionId: x.availableActionId,
                        sortingOrder: index,
                    }))
                }
            }
        })
        const trigger = await tx.trigger.create({
            data: {
                zapId: zap.id,
                triggerId: parsedData.data.availableTriggerId,
            },
        })
        await tx.zap.update({
            where: {
                id: zap.id,
            },
            data: {
                triggerId: trigger.id,
            }
        })
        return zap.id;
    })
    return res.json({
        zapId
    });
})


router.post("/", authMiddleware, async (req, res) => {
    // @ts-ignore
    const id = req.id;
    const zaps = await prismaClient.zap.findFirst({
        where: {
            id: id,
        },
        include: {
            actions: {
                include: {
                    type: true,
                }
            },
            trigger: {
                include: {
                    type: true,
                }
            }
        }
    });
    return res.json({ zaps });
});

router.get("/:zapId", authMiddleware, async (req, res) => {
    // @ts-ignore
    const id = req.id;
    const zapId = req.params.zapId;
    const zap = await prismaClient.zap.findFirst({
        where: {
            id: zapId,
            // userId: id,
        },
        include: {
            actions: {
                include: {
                    type: true,
                }
            },
            trigger: {
                include: {
                    type: true,
                }
            }
        }
    });
    return res.json({ zap });
});

export const zapRouter = router;