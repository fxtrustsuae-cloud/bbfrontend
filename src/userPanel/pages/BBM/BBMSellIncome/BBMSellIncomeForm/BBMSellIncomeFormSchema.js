import * as z from 'zod';

export const BBMSellIncomeFormSchema = z.object({
    amount: z.string().trim().min(1, "Please type your amount"),
    password: z.string().trim().min(1, "Please type your transaction password"),
    // wallet: z.string().trim().min(1, "Please select your wallet type")
})