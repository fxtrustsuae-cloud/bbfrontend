import * as z from "zod";

export const signinSchema = z.object({
    loginId: z.string().trim().min(1, "Please type your log in id"),
    password: z.string().trim().min(1, "Please type your password"),
});