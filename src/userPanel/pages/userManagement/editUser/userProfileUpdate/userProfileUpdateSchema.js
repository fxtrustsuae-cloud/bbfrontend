import * as z from 'zod';

export const userProfileUpdateSchema = z.object({
    name: z.string().trim().min(1, "Please type your name"),
    email: z.string().trim().email("Please type a valid email").min(1, "Please type your email"),
    mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
    userId: z.string().trim().min(1, "Please type your id"),
    isEmailVerified: z.boolean(),
    isMobileVerified: z.boolean(),
    isWithdrawAllowed: z.boolean(),
    isStakingAllowed: z.boolean(),
    isInternalTransferAllowed: z.boolean(),
    isAvailableForReward: z.boolean(),
    isEligibleForRankReward: z.boolean()
})