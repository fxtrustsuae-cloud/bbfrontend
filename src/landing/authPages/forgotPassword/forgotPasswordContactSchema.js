import * as z from 'zod';

export const forgotPasswordContactSchema = z.object({
    // contact: z.enum(['email', 'mobile']),
    email: z.string().trim().email("Please type a valid email").min(1,"Please enter your email"),
//     mobile: z.string().optional()
// }).superRefine((data, ctx) => {
//     if (data.contact === 'email') {
//         const emailResult = z.string().email().safeParse(data.email);
//         if (!emailResult.success) {
//             ctx.addIssue({
//                 code: z.ZodIssueCode.custom,
//                 message: "Invalid email",
//                 path: ['email']
//             });
//         }
//     } else {
//         const mobileResult = z.string().regex(/^\d{10}$/).safeParse(data.mobile);
//         if (!mobileResult.success) {
//             ctx.addIssue({
//                 code: z.ZodIssueCode.custom,
//                 message: "Invalid mobile number",
//                 path: ['mobile']
//             });
//         }
//     }
});