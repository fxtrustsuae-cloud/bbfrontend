// import * as z from 'zod';

// export const bankDetailsFormSchema = z.object({
//     holderName: z.string().min(1, "Please type account holder name").min(3, "Account holder name must be at least 3 characters long"),
//     bankName: z.string().min(2, "Please select your"),
//     accountNo: z.string()
//         .min(1, "Please type your account number")
//         .min(8, "Account number must be at least 8 characters")
//         .max(17, "Invalid Account number")
//         .regex(/^\d+$/, "Account number must contain only numbers"),
//     ifscCode: z.string()
//         .min(1, "Please type your IFSC code")
//         .length(11, "IFSC code must be exactly 11 characters")
//         .regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code"),
//     branchName: z.string().min(2, "Please type your branch name"),
//     accountType: z.enum(["SAVING", "CURRENT"], { message: "Account type must be either Savings or Current" }),
//     panNumber: z.string()
//         .min(1, "Please type your pan number")
//         .max(10, "Invalid PAN number")
//         .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN number"),
// });