import { z } from 'zod';

export const SignUpSchema = z.object({
    username: z.string().min(5),
    password: z.string().min(6),
})

export const SignInSchema = z.object({
    username: z.string(),
    password: z.string(),
})