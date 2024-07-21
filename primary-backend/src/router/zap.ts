import { Router } from "express"
import { authMiddleware } from "../middleware";

const router = Router();

router.post("/", authMiddleware, (req, res) => {
    console.log("create a zap")
})
router.post("/", authMiddleware, (req, res) => {
    console.log("zap handler")
})
router.post("/:zapId", authMiddleware, (req, res) => {
    console.log("signup")
})

export const zapRouter = router;