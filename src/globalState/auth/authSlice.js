import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: sessionStorage.getItem('token') || null,
    tempToken: "",
    tokenExpTime: JSON.parse(sessionStorage.getItem("tokenExpTime")) || null,
    userData: JSON.parse(sessionStorage.getItem("userData")) || null,
    forgotPasswordActiveStep: "sendOTP",
    selectedContactForOtp: "",
    emailOnOtpSent: "",
    resendOtpCreatedTime: JSON.parse(sessionStorage.getItem("resendOtpCreatedTime")) || null,
    resendOtpExpiryTime: JSON.parse(sessionStorage.getItem("resendOtpExpiryTime")) || null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload;
            sessionStorage.setItem('token', action.payload);
        },
        logout: (state) => {
            state.token = null;
            state.userData = null;
            sessionStorage.removeItem('token');
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
            sessionStorage.setItem("userData", JSON.stringify(action.payload));
        },
        removeUserData: (state) => {
            state.userData = null;
            sessionStorage.removeItem("userData")
        },
        initializeAuth: (state) => {
            const storedToken = sessionStorage.getItem("token");
            if (storedToken) {
                state.token = storedToken;
            }
        },
        setForgotPasswordActiveStep: (state, action) => {
            state.forgotPasswordActiveStep = action.payload;
        },
        setSelectedContactForOtp: (state, action) => {
            state.selectedContactForOtp = action.payload
        },
        setTempToken: (state, action) => {
            state.tempToken = action.payload
        },
        setEmailOnOtpSent: (state, action) => {
            state.emailOnOtpSent = action.payload
        },
        setTokenExpTime: (state, action) => {
            state.tokenExpTime = action.payload
            if (action.payload) {
                sessionStorage.setItem("tokenExpTime", JSON.stringify(action.payload))
            } else {
                sessionStorage.removeItem("tokenExpTime")
            }
        },
        setResendOtpCreatedTime: (state, action) => {
            if (action.payload) {
                sessionStorage.setItem("resendOtpCreatedTime", JSON.stringify(action.payload))
                state.resendOtpCreatedTime = action.payload
            } else {
                sessionStorage.removeItem("resendOtpCreatedTime")
                state.resendOtpCreatedTime = action.payload
            }
        },
        setResendOtpExpiryTime: (state, action) => {
            if (action.payload) {
                sessionStorage.setItem("resendOtpExpiryTime", JSON.stringify(action.payload))
                state.resendOtpExpiryTime = action.payload
            } else {
                sessionStorage.removeItem("resendOtpExpiryTime")
                state.resendOtpExpiryTime = action.payload
            }
        }
    },
});

export const {
    login,
    logout,
    setUserData,
    removeUserData,
    initializeAuth,
    setForgotPasswordActiveStep,
    setSelectedContactForOtp,
    setTempToken,
    setEmailOnOtpSent,
    setTokenExpTime,
    setResendOtpCreatedTime,
    setResendOtpExpiryTime
} = authSlice.actions;
export default authSlice.reducer;