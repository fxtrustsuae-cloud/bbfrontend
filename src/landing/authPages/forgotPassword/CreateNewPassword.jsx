import { Button, Stack, Typography, InputLabel, OutlinedInput, InputAdornment, IconButton, Box } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useResetPasswordMutation } from '../../../globalState/auth/authApis';
import * as z from 'zod';
import { setNotification } from '../../../globalState/notification/notificationSlice';
import { useDispatch } from 'react-redux';

export const createNewPasswordSchema = z.object({
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    cnfPassword: z.string().min(8, "Password must be at least 8 characters"),
}).refine(data => data.newPassword === data.cnfPassword, {
    message: "Passwords do not match",
    path: ["cnfPassword"],
});



function CreateNewPassword({ onClose }) {

    const dispatch = useDispatch()

    const [showPassword, setShowPassword] = useState({
        newPassword: false,
        cnfPassword: false
    });

    const togglePasswordVisibility = (field) => {
        setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const defaultValues = {
        newPassword: "",
        cnfPassword: ""
    };

    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        resolver: zodResolver(createNewPasswordSchema),
        defaultValues
    });

    const [resetPassword] = useResetPasswordMutation()

    const onSubmit = async (data) => {
        try {
            const response = await resetPassword(data).unwrap();
            if (response?.status) {
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
                onClose(true)
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
            gap="1.2rem"
            component="form"
            justifyContent={"center"}
            alignItems={"center"}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Stack gap={".8rem"}>
                {["newPassword", "cnfPassword"].map((field) => (
                    <Box key={field} item>
                        <InputLabel sx={{ mb: ".5rem" }}>
                            {field === "newPassword" ? "New Password" : "Confirm Password"}
                        </InputLabel>
                        <OutlinedInput
                            size="small"
                            {...register(field)}
                            placeholder="********"
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
                    </Box>
                ))}
            </Stack>
            <Button
                type="submit"
                size="small"
                variant="contained"
                sx={{
                    textTransform: "capitalize",
                    boxShadow: "none",
                    bgcolor: "#f1b811",
                    color: "white",
                    "&:hover": {
                        boxShadow: "none"
                    }
                }}
            >
                Submit
            </Button>
        </Stack>
    );
}

export default CreateNewPassword;