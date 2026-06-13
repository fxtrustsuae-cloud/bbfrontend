import { Button, Card, Container, Divider, Stack, Typography } from '@mui/material'
import { TextField, InputLabel, OutlinedInput, IconButton, InputAdornment } from '@mui/material'
import { useEffect, useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from "@mui/material/Grid2"
import Selector from '../../../../userPanelComponent/Selector';
import { useDispatch } from 'react-redux';
import { useUpdateWalletAddressMutation } from '../../../../../globalState/walletState/walletStateApis';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { walletAddressFormSchema } from './walletAddressFormSchema';
import { useGetUserProfileQuery } from '../../../../../globalState/settings/profileSettingApi';
import { setNotification } from '../../../../../globalState/notification/notificationSlice';

function WalletAddressForm() {

    const { data, refetch } = useGetUserProfileQuery()

    const userData = data?.data

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const dispatch = useDispatch()

    const defaultValues = {
        address: "",
        // password: ""
    };

    const { register, watch, setValue, handleSubmit, setError, reset, formState: { errors } } = useForm({
        resolver: zodResolver(walletAddressFormSchema),
        defaultValues
    });

    useEffect(() => {
        reset({
            address: userData?.walletAddress || ""
        })
    }, [userData])

    const [updateWalletAddress, { isLoading }] = useUpdateWalletAddressMutation()

    const onSubmit = async (data) => {

        try {
            const response = await updateWalletAddress(data).unwrap();
            if (response?.status) {
                refetch()
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
        <Stack>
            <Container>
                <Card
                    sx={{
                        padding: { xs: "1rem", sm: "2rem" },
                        borderRadius: "2rem",
                        boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                    }}
                >
                    <Typography variant='h6' m={{ xs: "1rem", sm: "0" }}>Add New USDT.BEP20 Address to Receive Profits</Typography>
                    <Divider sx={{ my: "1.2rem" }} />
                    <Stack
                        gap={"2rem"}
                        component={"form"}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Grid container size={12} spacing={2}>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Select Wallet</InputLabel>
                                <Selector
                                    shouldBeDisabled={true}
                                    value={"Tether USD (BEP20)"}
                                    items={["Tether USD (BEP20)"]}
                                    shouldBeFullWidth={true}
                                    showDefaultOption={true}
                                // onChange={(e) => setValue("", e.target.value, { shouldValidate: true })}
                                />
                                {/* {errors.amount && <Typography color="error">{errors.amount.message}</Typography>} */}
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Address</InputLabel>
                                <TextField {...register("address", { required: true })} size='small' fullWidth placeholder="Wallet address" variant="outlined" />
                                {errors.address && <Typography color="error">{errors.address.message}</Typography>}
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Transaction Password</InputLabel>
                                <OutlinedInput
                                    {...register("amount", { required: true })}
                                    size='small'
                                    placeholder='********'
                                    fullWidth
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label={
                                                    showPassword ? 'hide the password' : 'display the password'
                                                }
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                onMouseUp={handleMouseUpPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                {/* {errors.amount && <Typography color="error">{errors.amount.message}</Typography>} */}
                            </Grid>
                        </Grid>
                        <Button
                            variant='contained'
                            size='small'
                            type='submit'
                            disabled={isLoading}
                            sx={{
                                textTransform: "capitalize",
                                boxShadow: "none",
                                bgcolor: "primary.main",
                                fontSize: "1rem",
                                alignSelf: "flex-start",
                                color: "white",
                                "&:hover": {
                                    boxShadow: "none"
                                }
                            }}
                        >Submit</Button>
                    </Stack>
                </Card>
            </Container>
        </Stack>
    )
}

export default WalletAddressForm;