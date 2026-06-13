import * as z from 'zod';

export const BBMICOFormSchema = z.object({
    amount: z.string().trim().min(1, "Please type your amount"),
    password: z.string().trim().min(1, "Please type your transaction password"),
    // isFullPyament: z.string().trim().min(1, "Please select your payment type")
    wallet: z.string().trim().min(1, "Please select your wallet type")
})