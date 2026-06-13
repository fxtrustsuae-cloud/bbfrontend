import * as z from 'zod';

export const walletAddressFormSchema = z.object({
    address: z.string().min(1, "Please type your wallet address"),
    // password: z.string().min(1, "Please type your transaction password")
})