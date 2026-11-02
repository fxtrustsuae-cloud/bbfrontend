import { Button, Card, Divider, Stack, Typography, TextField, InputLabel, InputAdornment, IconButton, OutlinedInput, Skeleton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from "@mui/material/Grid2"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { setNotification } from '../../../../globalState/notification/notificationSlice';
import { useDispatch } from 'react-redux';
import { withdrawAmountSchema } from './withdrawAmountSchema';
import Selector from "../../../userPanelComponent/Selector"
import { useWalletWithdrawMutation } from '../../../../globalState/walletState/walletStateApis';
import { useGetUserProfileQuery } from '../../../../globalState/settings/profileSettingApi';
import { useState } from 'react';


const walletType = [
    { label: "Main wallet", value: "MAIN" },
    // { label: "Affliate wallet", value: "AFFLIATE" },
    { label: "Coin wallet", value: "COIN" },
    { label: "Trade wallet", value: "TRADE" } // <-- NAYA OPTION ADD KIYA HAI
];

function WithdrawAmount() {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const { data, isLoading: userDataLoading, refetch } = useGetUserProfileQuery()

    const userData = data?.data

    const dispatch = useDispatch()

    const defaultValues = {
        wallet: "",
        amount: "",
        password: ""
    };


    const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(withdrawAmountSchema),
        defaultValues
    });

    const [walletWithdraw, { isLoading }] = useWalletWithdrawMutation()

    const onSubmit = async (data) => {

        try {
            const response = await walletWithdraw(data).unwrap();

            if (response?.status) {
                reset(defaultValues);
                refetch()
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
            }
        } catch (error) {
            if (error?.data) {
                dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }));
            }
        }
    };

    return (
        <Stack>
            {/* <Container> */}
            <Typography variant="h4" fontWeight="bold" mb={"2rem"}>Withdraw amount</Typography>
            <Card
                sx={{
                    padding: { xs: "1rem", sm: "2rem" },
                    borderRadius: "2rem",
                    boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                }}
            >
                <Typography variant='h6' m={{ xs: "1rem", sm: "0" }}>Fill details</Typography>
                <Divider sx={{ my: "1.2rem" }} />
                <Stack
                    gap={"2rem"}
                    component={"form"}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Grid container size={12} spacing={2}>
                        <Grid item size={{ xs: 12, sm: 6 }}>
                            <InputLabel sx={{ mb: ".5rem" }}>Withdraw from wallet *</InputLabel>
                            <Selector
                                items={walletType}
                                shouldBeFullWidth={true}
                                value={watch("wallet")}
                                onChange={(e) => setValue("wallet", e.target.value, { shouldValidate: true })}
                            />
                            {errors.wallet && <Typography color="error" fontSize={"13px"}>{errors.wallet.message}</Typography>}
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 6 }}>
                            <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Amount to withdraw *</InputLabel>
                                <InputLabel sx={{ mb: ".5rem" }}>
                                    {/* NAYE BALANCE KI CONDITION YAHAN ADD KI HAI */}
                                    Balance: $ {
                                        watch("wallet") === "MAIN" ? (userDataLoading ? <Skeleton /> : userData?.BUSDBalance) : 
                                        watch("wallet") === "AFFLIATE" ? (userDataLoading ? <Skeleton /> : userData?.AFFLIATEBalance) : 
                                        watch("wallet") === "COIN" ? (userDataLoading ? <Skeleton /> : userData?.COINBalance) : 
                                        watch("wallet") === "TRADE" ? (userDataLoading ? <Skeleton /> : userData?.TRADEBalance) : 
                                        0
                                    }
                                </InputLabel>
                            </Stack>
                            <TextField
                                {...register("amount", { require: true })}
                                size='small' fullWidth placeholder="Amount transfer" variant="outlined" />
                            {errors.amount && <Typography color="error">{errors.amount.message}</Typography>}
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 6 }}>
                            <InputLabel sx={{ mb: ".5rem" }}>Transaction password *</InputLabel>
                            <OutlinedInput
                                {...register("password", { require: true })}
                                size='small'
                                fullWidth
                                placeholder="Transaction password"
                                variant="outlined"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff sx={{ color: '#f1b811', fontSize: "20px" }} /> : <Visibility sx={{ color: '#f1b811', fontSize: "20px" }} />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            {errors.password && <Typography color="error">{errors.password.message}</Typography>}
                        </Grid>
                    </Grid>
                    <Button
                        variant='contained'
                        size='small'
                        type='submit'
                        disabled={isLoading}
                        sx={{
                            textTransform: "capitalize",
                            width: "5rem",
                            boxShadow: "none",
                            bgcolor: "primary.main",
                            fontSize: "1rem",
                            color: "white",
                            "&:hover": {
                                boxShadow: "none"
                            }
                        }}
                    >Submit</Button>
                </Stack>
            </Card>
            {/* </Container> */}
        </Stack>
    )
}

export default WithdrawAmount;