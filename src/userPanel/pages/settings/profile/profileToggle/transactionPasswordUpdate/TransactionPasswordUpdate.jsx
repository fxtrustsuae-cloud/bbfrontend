import { Button, Stack, Typography, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import Grid from "@mui/material/Grid2";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { transactionPasswordUpdateSchema } from './transactionPasswordUpdateSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNotification } from '../../../../../../globalState/notification/notificationSlice';
import { useUpdateTransactionPasswordMutation } from '../../../../../../globalState/walletState/walletStateApis';

function TransactionPasswordUpdate() {

    const dispatch = useDispatch()

    const [showPassword, setShowPassword] = useState({
        currPassword: false,
        newPassword: false,
        cnfPassword: false
    });

    const togglePasswordVisibility = (field) => {
        setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const [updateTransactionPassword, { isLoading }] = useUpdateTransactionPasswordMutation();

    const defaultValues = {
        prevPassword: "",
        newPassword: "",
        cnfPassword: ""
    };

    const { register, handleSubmit, setError, reset, formState: { errors } } = useForm({
        resolver: zodResolver(transactionPasswordUpdateSchema),
        defaultValues
    });

    const onSubmit = async (data) => {
        try {
            const response = await updateTransactionPassword(data).unwrap();
            if (response?.status) {
                reset(defaultValues)
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
        <Stack
            mt="2rem"
            gap="2rem"
            component="form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Grid container size={12} spacing={3}>
                {["prevPassword", "newPassword", "cnfPassword"].map((field) => (
                    <Grid key={field} item size={{ xs: 12, sm: 6, md: 4 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>
                            {field === "prevPassword" ? "Current Transaction Password" :
                                field === "newPassword" ? "New Transaction Password" :
                                    "Confirm Transaction Password"}
                        </InputLabel>
                        <OutlinedInput
                            size="small"
                            {...register(field)}
                            placeholder="********"
                            fullWidth
                            type={showPassword[field] ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={`toggle ${field} visibility`}
                                        onClick={() => togglePasswordVisibility(field)}
                                        edge="end"
                                    >
                                        {showPassword[field] ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {errors[field] && <Typography color="error">{errors[field].message}</Typography>}
                    </Grid>
                ))}
            </Grid>
            <Button
                type="submit"
                size="small"
                variant="contained"
                disabled={isLoading}
                sx={{
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
        </Stack>
    );
}

export default TransactionPasswordUpdate;