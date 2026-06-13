import { Stack, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box, OutlinedInput, InputAdornment, Button, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from '@mui/icons-material/Phone';
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForgotPasswordSendOTPMutation } from "../../../globalState/auth/authApis";
import { useDispatch } from "react-redux";
import { setEmailOnOtpSent, setForgotPasswordActiveStep, setSelectedContactForOtp } from "../../../globalState/auth/authSlice";
import { forgotPasswordContactSchema } from "./forgotPasswordContactSchema";
import { setNotification } from "../../../globalState/notification/notificationSlice";


function ForgotPasswordContact() {

    const dispatch = useDispatch();
    const [forgotPasswordSendOTP, { isLoading }] = useForgotPasswordSendOTPMutation();

    const {
        register,
        handleSubmit,
        setError,
        control,
        watch,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(forgotPasswordContactSchema),
        defaultValues: { email: "" }
    });

    // const contact = watch('contact');

    const onSubmit = async (data) => {

        try {
            // const payload = contact === 'email'
            //     ? { email: data.email }
            //     : { mobile: data.mobile };
           
            const response = await forgotPasswordSendOTP(data).unwrap();
           
            if (response?.status) {
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
                dispatch(setEmailOnOtpSent(data?.email))
                dispatch(setForgotPasswordActiveStep("verifyOTP"));
            }

        } catch (error) {
            if (error.data?.data) {
                Object.entries(error.data?.data).forEach(([field, message]) => {
                    setError(field, { type: "server", message });
                });
            } else {
                dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }));
            }
        }
    };

    return (
        <Stack sx={{ alignItems: "center" }}>
            {/* <FormControl sx={{ mb: "1.5rem" }}>
                <FormLabel sx={{ fontSize: "14px", color: "white", "&.Mui-focused": { color: "white" } }}>
                    Select Contact Option
                </FormLabel>
                <Controller
                    name="contact"
                    control={control}
                    render={({ field }) => (
                        <RadioGroup
                            sx={{ display: "flex", flexDirection: "row" }}
                            {...field}
                            value={field.value}
                            onChange={(e) => field.onChange(e.target.value)}
                        >
                            <FormControlLabel
                                value="mobile"
                                control={<Radio sx={{ color: "#f1b811", "&.Mui-checked": { color: "#f1b811" } }} />}
                                label="Registered Mobile"
                            />
                            <FormControlLabel
                                value="email"
                                control={<Radio sx={{ color: "#f1b811", "&.Mui-checked": { color: "#f1b811" } }} />}
                                label="Registered Email"
                            />
                        </RadioGroup>
                    )}
                />
            </FormControl> */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: ".5rem",
                    width: "100%",
                    maxWidth: "300px",
                    mt: "2rem"
                }}
                component="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <OutlinedInput
                    size="small"
                    placeholder={"Enter your email"}
                    fullWidth
                    {...register("email", { required: true })}
                    startAdornment={
                        <InputAdornment position="start">
                            <EmailIcon sx={{ color: "#f1b811", fontSize: "25px" }} />
                        </InputAdornment>
                    }
                />
                <Typography width={"100%"} color="error" fontSize="12px" textAlign={"left"}>
                    {errors?.email?.message}
                </Typography>
                <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    disabled={isLoading}
                    sx={{
                        textTransform: "capitalize",
                        boxShadow: "none",
                        bgcolor: "#f1b811",
                        fontSize: "1rem",
                        color: "white",
                        "&:hover": { boxShadow: "none" }
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Stack>
    );
}

export default ForgotPasswordContact;