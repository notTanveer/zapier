import { Router } from "express"
import { authMiddleware } from "../middleware";
import { SignInSchema, SignUpSchema } from "../types";
import { prismaClient } from "../db";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "../config";

const router = Router();

router.post("/signup", async (req, res) => {
    const body = req.body;
    const parsedData = SignUpSchema.safeParse(body);

    if (!parsedData.success) {
        return res.status(411).json({
            message: "Invalid data",
        });
    }

    const userExists = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.username,
        },
    })

    if (userExists) {
        return res.status(409).json({
            message: "User already exists",
        });
    }

    await prismaClient.user.create({
        data: {
            email: parsedData.data.username,
            password: parsedData.data.password,
        }
    })

    // implement email verification

    return res.json({
        message: "User created",
    });
})


router.post("/signin", async (req, res) => {
    const body = req.body;
    const parsedData = SignInSchema.safeParse(body);

    if (!parsedData.success) {
        return res.status(411).json({
            message: "Invalid data",
        });
    }

    const user = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.username,   
            password: parsedData.data.password,
        }
    })

    if (!user) {
        return res.status(401).json({
            message: "Invalid credentials",
        });
    }

    //sign in jwt token
    const token = jwt.sign({
        id: user.id,
    }, JWT_PASSWORD);

    res.json({
        token: token
    })

})

router.get("/user", authMiddleware, async (req, res) => {
    // @ts-ignore
    const id = req.id;
    const user = await prismaClient.user.findFirst({
        where: {
            id
        }, 
        select: {
            email: true,
            id: true,
        }   
    });
    
    return res.json({
        user
    });
})

export const userRouter = router;