"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZapCreateSchema = exports.SignInSchema = exports.SignUpSchema = void 0;
const zod_1 = require("zod");
exports.SignUpSchema = zod_1.z.object({
    username: zod_1.z.string().min(5),
    password: zod_1.z.string().min(6),
});
exports.SignInSchema = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string(),
});
exports.ZapCreateSchema = zod_1.z.object({
    availableTriggerId: zod_1.z.string(),
    triggerMetadata: zod_1.z.any().optional(),
    actions: zod_1.z.array(zod_1.z.object({
        availableActionId: zod_1.z.string(),
        actionMetadata: zod_1.z.any().optional(),
    })),
});
