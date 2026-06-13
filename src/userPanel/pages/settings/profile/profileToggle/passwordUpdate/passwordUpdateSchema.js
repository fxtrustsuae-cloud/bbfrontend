import * as z from 'zod';

export const passwordUpdateSchema = z.object({
    oldPassword: z.string().min(8, "Password must be at least 8 characters"),
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    cnfPassword: z.string().min(8, "Password must be at least 8 characters"),
}).refine(data => data.newPassword === data.cnfPassword, {
    message: "Passwords do not match",
    path: ["cnfPassword"],
});