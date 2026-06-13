import { Button, Card, Container, Divider, Stack, Typography, TextField, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from "@mui/material/Grid2"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { setNotification } from "../../../../globalState/notification/notificationSlice"
import { useDispatch } from 'react-redux';
import { swapSchema } from './swapSchema';
import { useSwapBUSDToTradeMutation } from '../../../../globalState/walletState/walletStateApis';
import Selector from "../../../userPanelComponent/Selector"
import { useGetUserProfileQuery } from '../../../../globalState/settings/profileSettingApi';
import { useState } from 'react';

const transferFromWalletItems = [
    { label: "Main", value: "MAIN" },
    { label: "Affiliate", value: "AFFLIATE" },
    { label: "Coin", value: "COIN" },
];

function Swap() {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const { data, refetch } = useGetUserProfileQuery()

    const userData = data?.data

    const dispatch = useDispatch()

    const defaultValues = {
        amount: "",
        password: "",
        wallet: ""
    };

    const { register, handleSubmit, watch, setValue, setError, reset, formState: { errors } } = useForm({
        resolver: zodResolver(swapSchema),
        defaultValues
    });

    const [walletDeposit, { isLoading }] = useSwapBUSDToTradeMutation()

    const onSubmit = async (data) => {

        try {
            const response = await walletDeposit(data).unwrap();

            if (response?.status) {
                reset(defaultValues);
                refetch()
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
            }
        } catch (error) {
            if (error?.data?.data) {
                Object.entries(error.data.data).forEach(([field, message]) => {
                    setError(field, { type: "server", message });
                });
            } else {
                dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }));
            }
        }
    };

    return (
        <Stack>
            {/* <Container> */}
                <Typography variant="h4" fontWeight="bold" mb={"2rem"}>Swap wallet transfer</Typography>
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
                                <InputLabel sx={{ mb: ".5rem" }}>Transfer from wallet *</InputLabel>
                                <Selector
                                    items={transferFromWalletItems}
                                    shouldBeFullWidth={true}
                                    value={watch("wallet")}
                                    onChange={(e) => setValue("wallet", e.target.value, { shouldValidate: true })}
                                />
                                {errors.wallet && <Typography color="error" fontSize={"13px"}>{errors.wallet.message}</Typography>}
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <InputLabel sx={{ mb: ".5rem" }}>Amount transfer *</InputLabel>
                                    <InputLabel sx={{ mb: ".5rem" }}>
                                        Balance: {watch("wallet") === "MAIN" ? userData?.BUSDBalance : watch("wallet") === "AFFLIATE" ? userData?.AFFLIATEBalance : watch("wallet") === "COIN" ? userData?.COINBalance : 0}
                                    </InputLabel>
                                </Stack>
                                <TextField
                                    {...register("amount", { required: true })}
                                    size='small' fullWidth placeholder="Amount transfer" variant="outlined" />
                                {errors.amount && <Typography color="error" fontSize={"13px"}>{errors.amount.message}</Typography>}
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Transfet to wallet *</InputLabel>
                                <Selector
                                    items={["TRADE"]}
                                    shouldBeFullWidth={true}
                                    shouldBeDisabled={true}
                                    value={["TRADE"]}
                                />
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
                                {errors.password && <Typography fontSize={"13px"} color="error">{errors.password.message}</Typography>}
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

export default Swap;