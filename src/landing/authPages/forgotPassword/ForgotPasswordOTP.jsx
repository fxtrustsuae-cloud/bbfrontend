import { useState, useRef, Fragment } from 'react';
import { InputBase, Box, Button, styled, Typography } from '@mui/material';
import { useForgotPasswordVerifyOTPMutation } from '../../../globalState/auth/authApis';
import { useDispatch, useSelector } from 'react-redux';
import { setForgotPasswordActiveStep, setSelectedContactForOtp, setTempToken } from '../../../globalState/auth/authSlice';
import { setNotification } from '../../../globalState/notification/notificationSlice';

function OTP({ separator, length, value, onChange }) {
    const inputRefs = useRef([]);

    const focusInput = (index) => {
        if (inputRefs.current[index]) {
            inputRefs.current[index].focus();
        }
    };

    const handleKeyDown = (event, index) => {
        switch (event.key) {
            case 'ArrowLeft':
                if (index > 0) focusInput(index - 1);
                event.preventDefault();
                break;
            case 'ArrowRight':
                if (index < length - 1) focusInput(index + 1);
                event.preventDefault();
                break;
            case 'Backspace':
                event.preventDefault();
                onChange((prev) => {
                    const otpArray = prev.split('');
                    otpArray[index] = '';
                    return otpArray.join('');
                });
                if (index > 0) focusInput(index - 1);
                break;
            default:
                break;
        }
    };

    const handleChange = (event, index) => {
        const currentValue = event.target.value.replace(/[^0-9]/g, '');

        onChange((prev) => {
            const otpArray = prev.split('');
            otpArray[index] = currentValue;
            return otpArray.join('');
        });

        if (currentValue && index < length - 1) {
            focusInput(index + 1);
        }
    };

    const handlePaste = (event) => {
        event.preventDefault();
        const pastedText = event.clipboardData.getData('text/plain').replace(/[^0-9]/g, '').slice(0, length);

        onChange(pastedText.padEnd(length, ''));
    };

    return (
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {new Array(length).fill(null).map((_, index) => (
                <Fragment key={index}>
                    <InputBase
                        slots={{ input: InputElement }}
                        aria-label={`Digit ${index + 1} of OTP`}
                        inputRef={(el) => (inputRefs.current[index] = el)}
                        inputProps={{
                            maxLength: 1,
                            onKeyDown: (event) => handleKeyDown(event, index),
                            onChange: (event) => handleChange(event, index),
                            onPaste: handlePaste,
                            value: value[index] ?? '',
                        }}
                    />
                    {index !== length - 1 && separator}
                </Fragment>
            ))}
        </Box>
    );
}

export default function ForgotPasswordOTP() {

    const [otp, setOtp] = useState(''.padEnd(6, ''));
    const [forgotPasswordVerifyOTP, { isLoading }] = useForgotPasswordVerifyOTPMutation();

    // const { selectedContactForOtp } = useSelector(state => state.auth)
    const { emailOnOtpSent } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const handleVerifyOTP = async () => {

        try {

            const response = await forgotPasswordVerifyOTP({ otp: otp, email: emailOnOtpSent }).unwrap();

            if (response?.status) {
                // dispatch(setSelectedContactForOtp(""))
                // dispatch(setTempToken(response?.data))
                dispatch(setForgotPasswordActiveStep("resetPassword"));
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }))
            }
        } catch (error) {
            dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }));
        }

    };

    return (
        <Box sx={{ height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
            <Typography fontSize={"14px"}>Enter OTP</Typography>
            <OTP value={otp} onChange={setOtp} length={6} />
            <Button
                type="submit"
                variant="contained"
                size="small"
                onClick={handleVerifyOTP}
                disabled={isLoading}
                sx={{
                    textTransform: "capitalize",
                    boxShadow: "none",
                    bgcolor: "#f1b811",
                    fontSize: "14px",
                    color: "white",
                    "&:hover": { boxShadow: "none" }
                }}
            >
                {isLoading ? 'Verifying...' : 'Verify OTP'}
            </Button>
        </Box>
    );
}

const InputElement = styled('input')(({ theme }) => `
  width: 40px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  text-align: center;
  padding: 8px 0;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? '#C7D0DD' : '#1C2025'};
  background: ${theme.palette.mode === 'dark' ? '#1C2025' : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? '#434D5B' : '#DAE2ED'};
  box-shadow: 0 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'};
  &:hover { border-color: #3399FF; }
  &:focus {
    border-color: #3399FF;
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? '#0072E5' : '#80BFFF'};
  }
  &:focus-visible { outline: 0; }
`);