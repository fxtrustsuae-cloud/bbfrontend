import { Button, Card, Checkbox, Stack, Typography, Divider, TextField, InputLabel, OutlinedInput, IconButton, InputAdornment, useMediaQuery, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Skeleton } from '@mui/material'
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from "@mui/material/Grid2"
import Selector from "../../../../userPanelComponent/Selector"
import { useBurnTokenMutation } from '../../../../../globalState/BBM/BBMApis';
import { useForm } from 'react-hook-form';
import { BBMICOFormSchema } from './BBMICOFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { setNotification } from '../../../../../globalState/notification/notificationSlice';
import { useDispatch } from 'react-redux';
import { useGetTokenPriceQuery } from "../../../../../globalState/walletState/walletStateApis"


const walletType = [
    { label: "Main 50%", value: "MAIN" },
    { label: "Affliate 50%", value: "AFFLIATE" },
    { label: "Coin 100%", value: "COIN" }
];


function BBMICOForm() {

    const { data, isLoading: tokenPriceLoading } = useGetTokenPriceQuery()

    const tokenPrice = data?.data

    const dispatch = useDispatch()

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const defaultValues = {
        wallet: "",
        amount: "",
        // isFullPyament: "",
        password: ""
    };

    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm({
        resolver: zodResolver(BBMICOFormSchema),
        defaultValues
    });

    const [burnToken, { isLoading }] = useBurnTokenMutation()

    const onSubmit = async (data) => {

        try {
            const response = await burnToken(data).unwrap();
            if (response?.status) {
                reset(defaultValues);
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
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
                    borderRadius: "1.2rem",
                    padding: { xs: "1rem", md: "2rem" }
                }}
                component={"form"}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Typography mx={{ xs: "1rem", md: "0" }}>Burn BBM ICO Token (@ $ {tokenPriceLoading ? <Skeleton width={"50px"} /> : tokenPrice}/token)</Typography>
                <Divider sx={{ my: "1.2rem" }} />
                <Grid container size={12} spacing={3}>
                    <Grid item size={{ xs: 12, sm: 6 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>Select Wallet</InputLabel>
                        <Selector
                            items={walletType}
                            shouldBeFullWidth={true}
                            value={watch("wallet")}
                            onChange={(e) => setValue("wallet", e.target.value, { shouldValidate: true })}
                        />
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>Amount($)</InputLabel>
                        <TextField {...register("amount", { require: true })} size='small' fullWidth placeholder="Enter Amount ($)" variant="outlined" />
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
                    {/* <Grid item size={{ xs: 12, sm: 6 }}>
                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">Payment</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={watch("isFullPyament")}
                                onChange={(e) => setValue("isFullPyament", e.target.value)}
                                sx={{ flexDirection: "row" }}
                            >
                                <FormControlLabel value={true} control={<Radio />} label="100% coin wallet" />
                                <FormControlLabel value={false} control={<Radio />} label="50% main balance" />
                                <FormControlLabel value={false} control={<Radio />} label="50% affiliate balance" />
                            </RadioGroup>
                        </FormControl>
                        {errors.isFullPyament && <Typography color="error">{errors.isFullPyament.message}</Typography>}
                    </Grid> */}
                    {/* <Grid sx={{ display: "flex", alignItems: "center" }} size={{ xs: 12 }}>
                        <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, margin: "0" }} />
                        <Typography>Check me out</Typography>
                    </Grid> */}
                </Grid>
                <Button
                    variant='contained'
                    disabled={isLoading}
                    type='submit'
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
                >Burn</Button>
            </Card>
        </Stack>
    )
}

export default BBMICOForm;