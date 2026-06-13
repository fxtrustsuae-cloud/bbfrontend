import * as z from "zod";

export const signinSchema = z.object({
    mobile: z.string().trim().min(1, "Please type your mobile no."),
    password: z.string().trim().min(1, "Please type your password"),
});