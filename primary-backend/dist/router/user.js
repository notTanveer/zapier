"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
router.post("/signup", (req, res) => {
    console.log("signup");
});
router.post("/signin", (req, res) => {
    console.log("signin");
});
router.get("/user", middleware_1.authMiddleware, (req, res) => {
    console.log("user");
});
exports.userRouter = router;
