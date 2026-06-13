import { Button, Card, Stack, Typography } from '@mui/material'
import { TextField, InputLabel } from '@mui/material'
import Grid from "@mui/material/Grid2"
import Selector from "../../../../userPanelComponent/Selector"
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userProfileUpdateSchema } from './userProfileUpdateSchema'
import { useEffect } from 'react'
import { useUserProfileUpdateMutation } from '../../../../../globalState/admin/adminStateApis'
import Loading from "../../../../userPanelComponent/Loading"
import { setNotification } from "../../../../../globalState/notification/notificationSlice"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function UserProfileUpdate({ userData, userDataLoading }) {

    const dispatch = useDispatch()

    const defaultValues = {
        name: "",
        email: "",
        mobile: "",
        userId: "",
        isEmailVerified: false,
        isMobileVerified: false,
        isWithdrawAllowed: false,
        isStakingAllowed: false,
        isInternalTransferAllowed: false,
        isAvailableForReward: false,
        isEligibleForRankReward: false,
        TRADEBalance: "",
        totalStakedBalance: "",
        totalWithdrawalBalance: "",
        totalTeamTurnoverBalance: "",
        totalDirectTeamTurnoverBalance: "",
        totalRemovedStakedBalance: "",
        totalDelegateRewardBalance: "",
        totalUnlockRewardBalnce: "",
        totalReferralRewardBalance: "",
        totalStakingRewardBalance: "",
        totalRankBonusBalance: "",
        totalRewardBalance: "",
        isTrxPassCreated: false,
        airDorpLevel: "",
        stakingLevel: "",
        rank: "",
        upgradeRankRewardWeeksPaid: "",
        upgradeRankRewardMaxWeeks: "",
        upgradeRankRewardRank: "",
        BUSDBalance: "",
        AFFLIATEBalance: ""
    }

    const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(userProfileUpdateSchema),
        defaultValues
    });

    useEffect(() => {
        reset({
            name: userData?.name,
            email: userData?.email,
            mobile: userData?.mobile,
            userId: userData?._id,
            isEmailVerified: userData?.isEmailVerified,
            isMobileVerified: userData?.isMobileVerified,
            isWithdrawAllowed: userData?.isWithdrawAllowed,
            isStakingAllowed: userData?.isStakingAllowed,
            isInternalTransferAllowed: userData?.isInternalTransferAllowed,
            isAvailableForReward: userData?.isAvailableForReward,
            isEligibleForRankReward: userData?.isEligibleForRankReward,
            TRADEBalance: userData?.TRADEBalance,
            totalStakedBalance: userData?.totalStakedBalance,
            totalWithdrawalBalance: userData?.totalWithdrawalBalance,
            totalTeamTurnoverBalance: userData?.totalTeamTurnoverBalance,
            totalDirectTeamTurnoverBalance: userData?.totalDirectTeamTurnoverBalance,
            totalRemovedStakedBalance: userData?.totalRemovedStakedBalance,
            totalDelegateRewardBalance: userData?.totalDelegateRewardBalance,
            totalUnlockRewardBalnce: userData?.totalUnlockRewardBalnce,
            totalReferralRewardBalance: userData?.totalReferralRewardBalance,
            totalStakingRewardBalance: userData?.totalStakingRewardBalance,
            totalRankBonusBalance: userData?.totalRankBonusBalance,
            totalRewardBalance: userData?.totalRewardBalance,
            isTrxPassCreated: userData?.isTrxPassCreated,
            airDorpLevel: userData?.airDorpLevel,
            stakingLevel: userData?.stakingLevel,
            rank: userData?.rank,
            upgradeRankRewardWeeksPaid: userData?.upgradeRankRewardWeeksPaid,
            upgradeRankRewardMaxWeeks: userData?.upgradeRankRewardMaxWeeks,
            upgradeRankRewardRank: userData?.upgradeRankRewardRank,
            BUSDBalance: userData?.BUSDBalance,
            AFFLIATEBalance: userData?.AFFLIATEBalance
        })
    }, [userData])

    const [userProfileUpdate, { isLoading }] = useUserProfileUpdateMutation()

    const onSubmit = async (data) => {

        try {

            const response = await userProfileUpdate(data).unwrap();

            if (response.status) {
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
            }

        } catch (error) {
            if (error?.data) {
                dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }))
            }

        }
    };

    return (
        <Stack mt={"2rem"}>
            <Typography variant='h5' fontWeight={"bold"} mb={"2rem"}>Update profile</Typography>
            {
                userDataLoading
                    ?
                    <Loading mt={"10rem"} />
                    :
                    <Card
                        component={"form"}
                        sx={{
                            padding: { xs: "1rem", sm: "2rem" },
                            borderRadius: "1rem",
                            boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                        }}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Grid
                            container
                            size={12}
                            spacing={2}
                        >
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Name</InputLabel>
                                <TextField
                                    {...register("name", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                                {errors.name && <Typography color="error">{errors.name.message}</Typography>}
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Email</InputLabel>
                                <TextField
                                    // disabled
                                    {...register("email", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                                {errors.email && <Typography color="error">{errors.email.message}</Typography>}
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Mobile</InputLabel>
                                <TextField
                                    // disabled
                                    {...register("mobile", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                                {errors.mobile && <Typography color="error">{errors.mobile.message}</Typography>}
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>User ID</InputLabel>
                                <TextField
                                    disabled
                                    {...register("userId", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Wallet address</InputLabel>
                                <Typography sx={{ wordBreak: "break-all" }}>{userData?.walletAddress ? userData?.walletAddress : "N/A"}</Typography>
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Email verified</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={watch("isEmailVerified") ?? false}
                                        onChange={(e) => setValue("isEmailVerified", e.target.value === "true")}
                                        sx={{ flexDirection: "row" }}
                                    >
                                        <FormControlLabel disabled value={true} control={<Radio />} label="True" />
                                        <FormControlLabel disabled value={false} control={<Radio />} label="False" />
                                    </RadioGroup>
                                </FormControl>
                                {errors.isEmailVerified && <Typography color="error">{errors.isEmailVerified.message}</Typography>}
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Mobile verified</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={watch("isMobileVerified") ?? false}
                                        onChange={(e) => setValue("isMobileVerified", e.target.value === "true")}
                                        sx={{ flexDirection: "row" }}
                                    >
                                        <FormControlLabel disabled value={true} control={<Radio />} label="True" />
                                        <FormControlLabel disabled value={false} control={<Radio />} label="False" />
                                    </RadioGroup>
                                </FormControl>
                                {errors.isMobileVerified && <Typography color="error">{errors.isMobileVerified.message}</Typography>}
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Withdraw allowed</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={watch("isWithdrawAllowed") ?? false}
                                        onChange={(e) => setValue("isWithdrawAllowed", e.target.value === "true")}
                                        sx={{ flexDirection: "row" }}
                                    >
                                        <FormControlLabel value={true} control={<Radio />} label="True" />
                                        <FormControlLabel value={false} control={<Radio />} label="False" />
                                    </RadioGroup>
                                </FormControl>
                                {errors.isWithdrawAllowed && <Typography color="error">{errors.isWithdrawAllowed.message}</Typography>}
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Staking allowed</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={watch("isStakingAllowed") ?? false}
                                        onChange={(e) => setValue("isStakingAllowed", e.target.value === "true")}
                                        sx={{ flexDirection: "row" }}
                                    >
                                        <FormControlLabel value={true} control={<Radio />} label="True" />
                                        <FormControlLabel value={false} control={<Radio />} label="False" />
                                    </RadioGroup>
                                </FormControl>
                                {errors.isStakingAllowed && <Typography color="error">{errors.isStakingAllowed.message}</Typography>}
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Internal transfer allowed</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={watch("isInternalTransferAllowed") ?? false}
                                        onChange={(e) => setValue("isInternalTransferAllowed", e.target.value === "true")}
                                        sx={{ flexDirection: "row" }}
                                    >
                                        <FormControlLabel value={true} control={<Radio />} label="True" />
                                        <FormControlLabel value={false} control={<Radio />} label="False" />
                                    </RadioGroup>
                                </FormControl>
                                {errors.isInternalTransferAllowed && <Typography color="error">{errors.isInternalTransferAllowed.message}</Typography>}
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Available for reward</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={watch("isAvailableForReward") ?? false}
                                        onChange={(e) => setValue("isAvailableForReward", e.target.value === "true")}
                                        sx={{ flexDirection: "row" }}
                                    >
                                        <FormControlLabel value={true} control={<Radio />} label="True" />
                                        <FormControlLabel value={false} control={<Radio />} label="False" />
                                    </RadioGroup>
                                </FormControl>
                                {errors.isAvailableForReward && <Typography color="error">{errors.isAvailableForReward.message}</Typography>}
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Eligible for rank reward</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={watch("isEligibleForRankReward") ?? false}
                                        onChange={(e) => setValue("isEligibleForRankReward", e.target.value === "true")}
                                        sx={{ flexDirection: "row" }}
                                    >
                                        <FormControlLabel value={true} control={<Radio />} label="True" />
                                        <FormControlLabel value={false} control={<Radio />} label="False" />
                                    </RadioGroup>
                                </FormControl>
                                {errors.isEligibleForRankReward && <Typography color="error">{errors.isEligibleForRankReward.message}</Typography>}
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Main balance</InputLabel>
                                <TextField
                                    disabled
                                    {...register("BUSDBalance", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Trade wallet balance</InputLabel>
                                <TextField
                                    disabled
                                    {...register("TRADEBalance", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Affliate balance</InputLabel>
                                <TextField
                                    disabled
                                    {...register("AFFLIATEBalance", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Total staked balance</InputLabel>
                                <TextField
                                    disabled
                                    {...register("totalStakedBalance", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Total withdrawal balance</InputLabel>
                                <TextField
                                    disabled
                                    {...register("totalWithdrawalBalance", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Total team turnover balance</InputLabel>
                                <TextField
                                    disabled
                                    {...register("totalTeamTurnoverBalance", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Total direct team turnover balance</InputLabel>
                                <TextField
                                    disabled
                                    {...register("totalDirectTeamTurnoverBalance", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Total removed staked balance</InputLabel>
                                <TextField
                                    disabled
                                    {...register("totalRemovedStakedBalance", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Total delegate reward balance</InputLabel>
                                <TextField
                                    disabled
                                    {...register("totalDelegateRewardBalance", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Total unlock reward balance</InputLabel>
                                <TextField
                                    disabled
                                    {...register("totalUnlockRewardBalnce", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Total referral reward balance</InputLabel>
                                <TextField
                                    disabled
                                    {...register("totalReferralRewardBalance", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Total staking reward balance</InputLabel>
                                <TextField
                                    disabled
                                    {...register("totalStakingRewardBalance", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Total rank bonus balance</InputLabel>
                                <TextField
                                    disabled
                                    {...register("totalRankBonusBalance", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Total reward balance</InputLabel>
                                <TextField
                                    disabled
                                    {...register("totalRewardBalance", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Is TRX password created</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={watch("isTrxPassCreated") ?? false}
                                        onChange={(e) => setValue("isTrxPassCreated", e.target.value === "true")}
                                        sx={{ flexDirection: "row" }}
                                    >
                                        <FormControlLabel value={true} control={<Radio />} label="True" />
                                        <FormControlLabel value={false} control={<Radio />} label="False" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Airdrop level</InputLabel>
                                <TextField
                                    disabled
                                    {...register("airDorpLevel", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Staking level</InputLabel>
                                <TextField
                                    disabled
                                    {...register("stakingLevel", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Rank</InputLabel>
                                <TextField
                                    disabled
                                    {...register("rank", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Upgrade rank reward weeks paid</InputLabel>
                                <TextField
                                    disabled
                                    {...register("upgradeRankRewardWeeksPaid", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Upgrade rank reward max weeks</InputLabel>
                                <TextField
                                    disabled
                                    {...register("upgradeRankRewardMaxWeeks", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Upgrade rank reward rank</InputLabel>
                                <TextField
                                    disabled
                                    {...register("upgradeRankRewardRank", { required: true })}
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            size="small"
                            disabled={isLoading}
                            variant="contained"
                            sx={{
                                mt: "1.5em",
                                textTransform: "capitalize",
                                boxShadow: "none",
                                bgcolor: "primary.main",
                                color: "white",
                                alignSelf: "flex-start",
                                "&:hover": {
                                    boxShadow: "none"
                                }
                            }}
                        >
                            Update
                        </Button>
                    </Card>
            }
        </Stack>
    )
}

export default UserProfileUpdate;
