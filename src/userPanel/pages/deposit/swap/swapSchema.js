import * as z from 'zod';

export const swapSchema = z.object({
    amount: z.string().trim().min(1, "Please type your transfer amount"),
    password: z.string().trim().min(1, "Please type your transaction password"),
    wallet: z.string().trim().min(1, "Please select your wallet type")
})