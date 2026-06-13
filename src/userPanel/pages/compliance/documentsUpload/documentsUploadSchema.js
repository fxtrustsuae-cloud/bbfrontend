import * as z from 'zod';

const fileTypes = ["image/jpeg", "image/png", "image/jpg", "application/pdf"];
const maxSize = 5 * 1024 * 1024;

export const documentsUploadSchema = z.object({
    poi: z
        .instanceof(File, { message: "Please upload a valid file" })
        .refine((file) => file && fileTypes.includes(file.type), {
            message: "Only JPEG, PNG, JPG and PDF are allowed"
        })
        .refine((file) => file && file.size <= maxSize, {
            message: "File size must not exceed 5MB"
        }),

    poa: z
        .instanceof(File, { message: "Please upload a valid file" })
        .refine((file) => file && fileTypes.includes(file.type), {
            message: "Only JPEG, PNG, JPG and PDF are allowed"
        })
        .refine((file) => file && file.size <= maxSize, {
            message: "File size must not exceed 5MB"
        }),

    extraDocs: z
        .array(z.instanceof(File))
        .optional()
        .refine(
            (files) =>
                !files ||
                files.every((file) => fileTypes.includes(file.type)),
            { message: "Only JPEG, PNG, JPG and PDF are allowed" }
        )
        .refine(
            (files) =>
                !files ||
                files.every((file) => file.size <= maxSize),
            { message: "Each file must not exceed 5MB" }
        ),
});