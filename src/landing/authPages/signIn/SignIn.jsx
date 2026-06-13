import {
    Box,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Button,
    Typography,
    IconButton,
    Card,
    CardContent,
    Stack,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { inputStyles } from "../authPagesInputStyle";
import { signinSchema } from "./signInSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignInMutation } from "../../../globalState/auth/authApis";
import ForgotPasswordModal from "../../Components/forgotPasswordModal/ForgotPasswordModal"
import { setNotification } from "../../../globalState/notification/notificationSlice";
import { useDispatch } from "react-redux";
import PersonIcon from '@mui/icons-material/Person';
import { removeUserData } from "../../../globalState/auth/authSlice";
import { initiateSocketConnection } from "../../../globalState/socketENV";
import { logout } from "../../../globalState/auth/authSlice";


function SignIn() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const socketRef = useRef(null);

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const [signIn, { isLoading }] = useSignInMutation();

    const defaultValues = {
        mobile: "",
        password: "",
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signinSchema),
        defaultValues: defaultValues
    });

    const handleLogoutEvent = (data, currentUserId) => {
        if (data?.userId === currentUserId) {
            dispatch(setNotification({ open: true, message: "You've been logged out.", severity: "info" }));
            dispatch(logout())
            navigate("/");
        }
    };

    const onSubmit = async (data) => {

        try {
            const response = await signIn(data).unwrap();

            if (response?.status) {
                const token = response?.data?.token
                const loggedInUserId = response?.data?.sendData?._id
                socketRef.current = initiateSocketConnection({
                    token,
                    dispatch,
                    onLogout: handleLogoutEvent,
                    currentUserId: loggedInUserId
                });
                navigate("/dashboard")
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
                // dispatch(removeUserData())
            }

        } catch (error) {
            if (error?.data) {
                dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to sign in. Please try again later.", severity: "error" }));
            }
        }
    };


    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: "url('/authPagesBgImage.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
            }}
        >
            <Stack
                sx={{
                    position: "absolute",
                    inset: 0,
                    height: "100%",
                    background: "linear-gradient(to top right, rgba(0, 0, 0, 0.76), rgba(0, 0, 0, 0.76))",
                    opacity: 0.7,
                }}
            ></Stack>
            <Card
                sx={{
                    width: { xs: 300, sm: 450 },
                    p: { xs: .5, sm: 2 },
                    borderRadius: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(80px)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
            >
                <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
                    component={"form"}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Typography variant="h4" fontWeight="bold" align="center" color="white">Sign In</Typography>
                    <Box>
                        <InputLabel sx={{ mb: ".5rem", color: "white", fontSize: "14px" }}>Mobile</InputLabel>
                        <OutlinedInput
                            size="small"
                            {...register("mobile", { required: true })}
                            placeholder='Mobile'
                            fullWidth
                            startAdornment={<InputAdornment position="start"><PersonIcon sx={{ color: '#f1b811', fontSize: "20px" }} /></InputAdornment>}
                            sx={{ ...inputStyles }}
                        />
                        {errors.mobile && <Typography color="error">{errors.mobile.message}</Typography>}
                    </Box>
                    <Box>
                        <InputLabel sx={{ mb: ".5rem", color: "white", fontSize: "14px" }}>Password</InputLabel>
                        <OutlinedInput
                            size="small"
                            {...register("password", { required: true })}
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
                            startAdornment={<InputAdornment position="start"><LockIcon sx={{ color: '#f1b811', fontSize: "20px" }} /></InputAdornment>}
                            sx={{ ...inputStyles }}
                        />
                        {errors.password && <Typography color="error">{errors.password.message}</Typography>}
                    </Box>
                    <Button
                        type="submit"
                        disabled={isLoading}
                        size="small"
                        variant='contained'
                        sx={{
                            mt: "1rem",
                            textTransform: "capitalize",
                            boxShadow: "none",
                            bgcolor: "#f1b811",
                            fontSize: "1.1rem",
                            color: "white",
                            "&:hover": {
                                boxShadow: "none"
                            }
                        }}
                    >Login</Button>
                </CardContent>
            </Card>
        </Box>
    );
};

export default SignIn;