import { Button, Card, Stack, Typography, OutlinedInput, InputAdornment, IconButton } from '@mui/material'
import { TextField, InputLabel } from '@mui/material'
import Grid from "@mui/material/Grid2"
import { useState, useEffect } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod';
import { useUserTransactionPasswordUpdateMutation } from '../../../../../globalState/admin/adminStateApis';
import { setNotification } from "../../../../../globalState/notification/notificationSlice"

const userProfileUpdateSchema = z.object({
    userId: z.string().trim().min(1, "Please type your id"),
    password: z.string().trim().min(1, "Please type your transaction password")
})

function TransactionPasswordUpdate() {

    const { id } = useParams()

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);


    const dispatch = useDispatch()

    const defaultValues = {
        userId: id ? id : "",
        password: ""
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(userProfileUpdateSchema),
        defaultValues
    });

    useEffect(() => {
        reset({
            userId: id && id,
        })
    }, [id])

    const [userTransactionPasswordUpdate, { isLoading }] = useUserTransactionPasswordUpdateMutation()

    const onSubmit = async (data) => {

        try {

            const response = await userTransactionPasswordUpdate(data).unwrap();

            if (response.status) {
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
                reset(defaultValues)
            }

        } catch (error) {
            if (error?.data) {
                dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }))
            }
        }
    };


    return (
        <Stack mt={"2rem"}>
            <Typography variant='h5' fontWeight={"bold"} mb={"2rem"}>Change transaction password</Typography>
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
                    <Grid item size={{ xs: 12, sm: 6 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>User ID</InputLabel>
                        <TextField
                            disabled
                            {...register("userId", { required: true })}
                            size='small'
                            fullWidth
                        />
                        {errors.userId && <Typography color="error">{errors.userId.message}</Typography>}
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>New password</InputLabel>
                        <OutlinedInput
                            {...register("password", { required: true })}
                            size="small"
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
        </Stack>
    )
}

export default TransactionPasswordUpdate;