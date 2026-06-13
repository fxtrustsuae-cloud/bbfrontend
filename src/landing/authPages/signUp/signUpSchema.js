import * as z from 'zod';

export const signupSchema = z.object({
    name: z.string().trim().min(1, "Please type your full name"),
    email: z.string().trim().email("Please enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    cnfPassword: z.string().min(8, "Password must be at least 8 characters"),
    referral: z.string().min(1, "Please type your referral code"),
    mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
}).refine(data => data.password === data.cnfPassword, {
    message: "Passwords do not match",
    path: ["cnfPassword"],
});