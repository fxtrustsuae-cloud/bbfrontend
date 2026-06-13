import * as z from 'zod';

export const tradingRobotFormSchema = z.object({
    userName: z.string().min(1, "Please type account holder name").min(3, "Account holder name must be at least 3 characters long"),
    trxPassword: z.string().min(1, "Please type your Transaction Password"),
    remark: z.string().min(1, "Please type your remark").min(3, "Remark must be at least 3 characters long"),
    otp: z.string().min(1, "Please type OTP").min(6, "Otp must be 6 characters long")
});