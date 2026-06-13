import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    depositQRData: JSON.parse(localStorage.getItem("depositQRData")) || null,
    selectedReferralCode: localStorage.getItem("selectedReferralCode") || null,
    hasTimedOut: false,
    countdownEndTime: parseInt(localStorage.getItem("countdown_end_time")) || null
};

const walletStateSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setDepositQRData: (state, action) => {
            state.depositQRData = action.payload;
            localStorage.setItem("depositQRData", JSON.stringify(action.payload));
        },
        removeDepositQRData: (state) => {
            state.depositQRData = null;
            localStorage.removeItem("depositQRData");
        },
        setSelectedReferralCode: (state, action) => {
            localStorage.setItem("selectedReferralCode", action.payload)
            state.selectedReferralCode = action.payload
        },
        setHasTimedOut: (state, action) => {
            state.hasTimedOut = action.payload;
            if (action.payload) {
                state.countdownEndTime = null;
                localStorage.removeItem("countdown_end_time");
            }
        },
        setCountdownEndTime: (state, action) => {
            state.countdownEndTime = action.payload;
            localStorage.setItem("countdown_end_time", action.payload);
        }
    }
});

export const {
    setDepositQRData,
    removeDepositQRData,
    setSelectedReferralCode,
    setHasTimedOut,
    setCountdownEndTime
} = walletStateSlice.actions;
export default walletStateSlice.reducer;