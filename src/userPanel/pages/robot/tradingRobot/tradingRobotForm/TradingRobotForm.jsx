import { Button, Card, Checkbox, Stack, Typography, Divider, Container, TextField, InputLabel, OutlinedInput, IconButton, InputAdornment } from '@mui/material'
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from "@mui/material/Grid2"
import { tradingRobotFormSchema } from './tradingRobotFormSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateRobotMutation } from '../../../../../globalState/robot/robotApi';
import { setNotification } from '../../../../../globalState/notification/notificationSlice';
import { useDispatch } from 'react-redux';


function TradingRobotForm() {

    const dispatch = useDispatch()

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const defaultValues = {
        userName: "",
        trxPassword: "",
        remark: "",
        otp: ""
    };

    const { register, handleSubmit, watch, setError, reset, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(tradingRobotFormSchema),
        defaultValues
    });

    const [createRobot, { isLoading }] = useCreateRobotMutation()


    const onSubmit = async (data) => {

        try {
            const response = await createRobot(data).unwrap();

            if (response?.status) {
                reset(defaultValues);
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
        <Stack mt={"2rem"}>
            <Container>
                <Card
                    sx={{
                        boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                        borderRadius: "2rem",
                        padding: { xs: "1rem", md: "2rem" }
                    }}
                    component={"form"}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Typography mx={{ xs: "1rem", md: "0" }}>Fill Details</Typography>
                    <Divider sx={{ my: "1.2rem" }} />
                    <Grid container size={12} spacing={3}>
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                            <InputLabel sx={{ mb: ".5rem" }}>User Name</InputLabel>
                            <TextField
                                size='small'
                                fullWidth
                                placeholder="User Name"
                                variant="outlined"
                                {...register("userName", { required: true })}
                            />
                            {errors.userName && <Typography color="error">{errors.userName.message}</Typography>}
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                            <InputLabel sx={{ mb: ".5rem" }}>Transaction Password</InputLabel>
                            <OutlinedInput
                                {...register("trxPassword", { required: true })}
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
                            {errors.trxPassword && <Typography color="error">{errors.trxPassword.message}</Typography>}
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                            <InputLabel sx={{ mb: ".5rem" }}>Remarks</InputLabel>
                            <TextField
                                size='small'
                                multiline
                                fullWidth
                                placeholder="Remarks..."
                                variant="outlined"
                                {...register("remark", { required: true })}
                            />
                            {errors.remark && <Typography color="error">{errors.remark.message}</Typography>}
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                            <InputLabel sx={{ mb: ".5rem" }}>One Time Password</InputLabel>
                            <OutlinedInput
                                {...register("otp", { required: true })}
                                size='small'
                                placeholder="Enter OTP"
                                fullWidth
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Button
                                            size='small'
                                            variant='contained'
                                            edge="end"
                                            sx={{
                                                height: "100%",
                                                boxShadow: "none",
                                                bgcolor: "primary.main",
                                                color: "white",
                                                textTransform: "capitalize",
                                                "&:hover": { boxShadow: "none" }
                                            }}
                                        >
                                            OTP
                                        </Button>
                                    </InputAdornment>
                                }
                            />
                            {errors.otp && <Typography color="error">{errors.otp.message}</Typography>}
                        </Grid>
                        {/* <Grid sx={{ display: "flex", alignItems: "center" }}>
                            <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, margin: "0" }} />
                            <Typography>Check me out</Typography>
                        </Grid> */}
                    </Grid>
                    <Button
                        type='submit'
                        size='small'
                        variant='contained'
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
                    >Submit</Button>
                </Card>
            </Container>
        </Stack>
    )
}

export default TradingRobotForm;