import { Button, Card, Checkbox, Stack, Typography, Divider, Container, TextField, InputLabel, OutlinedInput, IconButton, InputAdornment, useMediaQuery, Box, Skeleton } from '@mui/material'
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from "@mui/material/Grid2"
import Selector from "../../../../userPanelComponent/Selector"
import { useSellTokenMutation } from '../../../../../globalState/BBM/BBMApis';
import { useForm } from 'react-hook-form';
import { BBMSellIncomeFormSchema } from './BBMSellIncomeFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from "react-redux"
import { setNotification } from "../../../../../globalState/notification/notificationSlice"
import { useGetUserProfileQuery } from "../../../../../globalState/settings/profileSettingApi"
import { useGetTokenPriceQuery } from '../../../../../globalState/walletState/walletStateApis';

function BBMSellIncomeForm() {

    const { data: tokenData, isLoading: tokenPriceLoading } = useGetTokenPriceQuery()

    const tokenPrice = tokenData?.data

    const dispatch = useDispatch()

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const { data, isLoading: useDataLoading, refetch } = useGetUserProfileQuery()

    const totalTokenToSell = !useDataLoading && Number((data?.data?.totalBurnedTokenReward$ - data?.data?.totalSoldToken$) || 0).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 4,
    })

    const defaultValues = {
        // wallet: "",
        amount: "",
        password: ""
    };

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(BBMSellIncomeFormSchema),
        defaultValues
    });

    const [sellToken, { isLoading }] = useSellTokenMutation()

    const onSubmit = async (data) => {

        try {
            const response = await sellToken(data).unwrap();

            if (response?.status) {
                reset(defaultValues);
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
                refetch()
            }
        } catch (error) {
            if (error?.data) {
                dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }));
            }
        }
    };


    return (
        <Stack mt={"2rem"}>
            <Card
                sx={{
                    boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                    borderRadius: "2rem",
                    padding: { xs: "1rem", md: "2rem" }
                }}
                component={"form"}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Typography mx={{ xs: "1rem", md: "0" }}>Sell BBM ICO Token (@ $ {tokenPriceLoading ? <Skeleton width={"50px"} /> : tokenPrice}/token)</Typography>
                <Divider sx={{ my: "1.2rem" }} />
                <Grid container size={12} spacing={3}>
                    {/* <Grid item size={{ xs: 12, sm: 6 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>Select Wallet</InputLabel>
                        <Selector items={["Coin wallet"]} shouldBeFullWidth={true} />
                    </Grid> */}
                    <Grid item size={{ xs: 12, sm: 6 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <InputLabel sx={{ mb: ".5rem" }}>Token</InputLabel>
                            <InputLabel sx={{ mb: ".5rem" }}>$ {totalTokenToSell}</InputLabel>
                        </Box>
                        <TextField  {...register("amount", { require: true })} size='small' fullWidth placeholder="Enter token ($)" variant="outlined" />
                        {errors.amount && <Typography color="error">{errors.amount.message}</Typography>}
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>Transaction Password</InputLabel>
                        <OutlinedInput
                            placeholder='********'
                            fullWidth
                            size='small'
                            type={showPassword ? 'text' : 'password'}
                            {...register("password", { require: true })}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={
                                            showPassword ? 'hide the password' : 'display the password'
                                        }
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {errors.password && <Typography color="error">{errors.password.message}</Typography>}
                    </Grid>
                    {/* <Grid sx={{ display: "flex", alignItems: "center" }} size={{ xs: 12 }}>
                        <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, margin: "0" }} />
                        <Typography>Check me out</Typography>
                    </Grid> */}
                </Grid>
                <Button
                    variant='contained'
                    type='submit'
                    disabled={isLoading}
                    sx={{
                        textTransform: "capitalize",
                        boxShadow: "none",
                        bgcolor: "primary.main",
                        color: "white",
                        mt: '1.5rem',
                        "&:hover": {
                            boxShadow: "none"
                        }
                    }}
                >Sell</Button>
            </Card>
        </Stack>
    )
}

export default BBMSellIncomeForm;



// 