import * as z from "zod";

export const uploadUserDocumentSchema = z.object({
  userId: z.number({ required_error: "Client is required" })
    .nullable()
    .refine((v) => v !== null, { message: "Client is required" }),

  poi: z
    .instanceof(File, { message: "Please upload a valid image file" })
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "image/jpg", "application/pdf"].includes(
          file?.type
        ),
      { message: "Only JPEG, PNG, JPG and PDF files are allowed" }
    )
    .refine((file) => file && file.size <= 5 * 1024 * 1024, {
      message: "File size must not exceed 5MB",
    }),

  poa: z
    .instanceof(File, { message: "Please upload a valid image file" })
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "image/jpg", "application/pdf"].includes(
          file?.type
        ),
      { message: "Only JPEG, PNG, JPG and PDF files are allowed" }
    )
    .refine((file) => file && file.size <= 5 * 1024 * 1024, {
      message: "File size must not exceed 5MB",
    }),

  extraDocs: z
    .array(
      z
        .instanceof(File, { message: "Invalid file" })
        .refine(
          (file) =>
            ["image/jpeg", "image/png", "image/jpg", "application/pdf"].includes(
              file?.type
            ),
          { message: "Only JPEG, PNG, JPG and PDF files are allowed" }
        )
        .refine((file) => file.size <= 5 * 1024 * 1024, {
          message: "Each file must not exceed 5MB",
        })
    )
    // .optional(),
});