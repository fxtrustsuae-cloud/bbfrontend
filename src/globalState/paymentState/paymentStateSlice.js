import { createSlice } from '@reduxjs/toolkit';

const safeParse = (key) => {
    try {
        const item = sessionStorage.getItem(key);
        if (!item || item === "undefined" || item === "null") return null;
        return JSON.parse(item);
    } catch {
        return null;
    }
};

const initialState = {
    depositQRData: safeParse("depositQRData"),
    selectedReferralCode: sessionStorage.getItem("selectedReferralCode") || null,
    // hasTimedOut: false,
    countdownEndTime: parseInt(sessionStorage.getItem("countdown_end_time")) || null,
    createdTime: parseInt(sessionStorage.getItem("created_time")) || null,
    expireTime: parseInt(sessionStorage.getItem("expire_time")) || null,
    paymentLoading: sessionStorage.getItem("payment_loading") || false
};

const paymentStateSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        setDepositQRData: (state, action) => {
            const value = action.payload ?? null;
            state.depositQRData = value;
            sessionStorage.setItem("depositQRData", JSON.stringify(value));
        },
        setCreatedTime: (state, action) => {
            state.createdTime = action.payload;
            sessionStorage.setItem("created_time", action.payload);
        },
        setExpireTime: (state, action) => {
            state.expireTime = action.payload;
            sessionStorage.setItem("expire_time", action.payload);
        },
        setPaymentLoading: (state, action) => {
            state.paymentLoading = action.payload;
            sessionStorage.setItem("payment_loading", action.payload);
        },
        removeDepositQRData: (state) => {
            state.depositQRData = null;
            sessionStorage.removeItem("depositQRData");
        },
        removeCreatedTime: (state) => {
            state.createdTime = null;
            sessionStorage.removeItem("created_time");
        },
        removeExpireTime: (state) => {
            state.expireTime = null;
            sessionStorage.removeItem("expire_time");
        },
        removePaymentLoading: (state) => {
            state.paymentLoading = null;
            sessionStorage.removeItem("payment_loading");
        },
        setSelectedReferralCode: (state, action) => {
            sessionStorage.setItem("selectedReferralCode", action.payload)
            state.selectedReferralCode = action.payload
        },
        setHasTimedOut: (state, action) => {
            // state.hasTimedOut = action.payload;
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
    removeCreatedTime,
    removeExpireTime,
    removePaymentLoading,
    setSelectedReferralCode,
    setHasTimedOut,
    setCountdownEndTime,
    setCreatedTime,
    setExpireTime,
    setPaymentLoading
} = paymentStateSlice.actions;
export default paymentStateSlice.reducer;