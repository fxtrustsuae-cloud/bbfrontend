import * as z from 'zod';

export const profileUpdateSchema = z.object({
    name: z.string().trim().min(1, "Please type your name")
})