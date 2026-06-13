import * as z from 'zod';

export const internalTransferSchema = z.object({
    amount: z.string().trim().min(1, "Please type your transfer amount"),
    referralCode: z.string().trim().min(1, "Please type your referral code"),
    password: z.string().trim().min(1, "Please type your transaction password")
})