import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem('token') || null,
    tempToken: "",
    tokenExpTime: JSON.parse(localStorage.getItem("tokenExpTime")) || null,
    userData: JSON.parse(localStorage.getItem("userData")) || null,
    forgotPasswordActiveStep: "sendOTP",
    selectedContactForOtp: "",
    emailOnOtpSent: ""
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        },
        logout: (state) => {
            state.token = null;
            state.userData = null;
            state.tokenExpTime = null
            localStorage.clear()
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
            localStorage.setItem("userData", JSON.stringify(action.payload));
        },
        removeUserData: () => {
            state.userData = null;
            localStorage.removeItem("userData")
        },
        initializeAuth: (state) => {
            const storedToken = localStorage.getItem("token");
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
                localStorage.setItem("tokenExpTime", JSON.stringify(action.payload))
            } else {
                localStorage.removeItem("tokenExpTime")
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
    setTokenExpTime
} = authSlice.actions;
export default authSlice.reducer;