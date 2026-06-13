import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    depositQRData: JSON.parse(sessionStorage.getItem("depositQRData")) || null,
    selectedReferralCode: sessionStorage.getItem("selectedReferralCode") || null,
    hasTimedOut: false,
    countdownEndTime: parseInt(sessionStorage.getItem("countdown_end_time")) || null
};

const walletStateSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setDepositQRData: (state, action) => {
            state.depositQRData = action.payload;
            sessionStorage.setItem("depositQRData", JSON.stringify(action.payload));
        },
        removeDepositQRData: (state) => {
            state.depositQRData = null;
            sessionStorage.removeItem("depositQRData");
        },
        setSelectedReferralCode: (state, action) => {
            sessionStorage.setItem("selectedReferralCode", action.payload)
            state.selectedReferralCode = action.payload
        },
        removeSelectedReferralCode: (state) => {
            state.selectedReferralCode = null
            sessionStorage.removeItem("selectedReferralCode")
        },
        setHasTimedOut: (state, action) => {
            state.hasTimedOut = action.payload;
            if (action.payload) {
                state.countdownEndTime = null;
                sessionStorage.removeItem("countdown_end_time");
            }
        },
        setCountdownEndTime: (state, action) => {
            state.countdownEndTime = action.payload;
            sessionStorage.setItem("countdown_end_time", action.payload);
        }
    }
});

export const {
    setDepositQRData,
    removeDepositQRData,
    setSelectedReferralCode,
    setHasTimedOut,
    setCountdownEndTime,
    removeSelectedReferralCode
} = walletStateSlice.actions;
export default walletStateSlice.reducer;