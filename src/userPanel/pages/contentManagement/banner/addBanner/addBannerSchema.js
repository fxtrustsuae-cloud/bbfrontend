import * as z from 'zod';

export const addBannerSchema = z.object({
    title: z.string().trim().min(1, "Please type your transfer amount"),
    image: z
        .instanceof(File, { message: "Please upload a valid image file" })
        .refine(
            (file) => file && ["image/jpeg", 'image/jpg', "image/png"].includes(file.type),
            { message: "Only JPEG or PNG images are allowed" }
        )
        .refine(
            (file) => file && file.size <= 5 * 1024 * 1024,
            { message: "Image size must not exceed 5MB" }
        )
})