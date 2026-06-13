import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    kycStep: "emailVerification",
    mobileOnOtpSent: sessionStorage.getItem("mobileOnOtpSent") || "",
    emailOnOtpSentKyc: sessionStorage.getItem("emailOnOtpSentKyc") || ""
};

const kycStateSlice = createSlice({
    name: 'kyc',
    initialState,
    reducers: {
        setKycStep: (state, action) => {
            state.kycStep = action.payload;
        },
        setMobileOnOtpSent: (state, action) => {
            state.mobileOnOtpSent = action.payload
            sessionStorage.setItem("mobileOnOtpSent", action.payload)
        },
        removeMobileOnOtpSent: (state, action) => {
            state.mobileOnOtpSent = action.payload;
            sessionStorage.removeItem("mobileOnOtpSent");
        },
        setEmailOnOtpSentKyc: (state, action) => {
            state.emailOnOtpSentKyc = action.payload
            sessionStorage.setItem("emailOnOtpSentKyc", action.payload)
        },
        removeEmailOnOtpSentKyc: (state, action) => {
            state.emailOnOtpSentKyc = action.payload;
            sessionStorage.removeItem("emailOnOtpSentKyc");
        }
    }
});

export const {
    setKycStep,
    setMobileOnOtpSent,
    removeMobileOnOtpSent,
    setEmailOnOtpSentKyc,
    removeEmailOnOtpSentKyc
} = kycStateSlice.actions;
export default kycStateSlice.reducer;