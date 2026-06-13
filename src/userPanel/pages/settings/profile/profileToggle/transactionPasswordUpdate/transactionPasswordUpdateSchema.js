import * as z from 'zod';

export const transactionPasswordUpdateSchema = z.object({
    prevPassword: z.string()
        .min(8, "Password must be at least 8 characters")
        .regex(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
            "Password must contain at least one digit, one lowercase letter, one uppercase letter, and one special character"
        ),
    newPassword: z.string()
        .min(8, "Password must be at least 8 characters")
        .regex(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
            "Password must contain at least one digit, one lowercase letter, one uppercase letter, and one special character"
        ),
    cnfPassword: z.string()
        .min(8, "Password must be at least 8 characters")
        .regex(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
            "Password must contain at least one digit, one lowercase letter, one uppercase letter, and one special character"
        ),
}).refine(data => data.newPassword === data.cnfPassword, {
    message: "Passwords do not match",
    path: ["cnfPassword"],
});