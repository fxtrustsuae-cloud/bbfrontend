import { logout, setTokenExpTime, setResendOtpCreatedTime, setResendOtpExpiryTime } from './authSlice';
import {
    removeCreatedTime,
    removeDepositQRData,
    removeExpireTime,
    removePaymentLoading,
    setHasTimedOut
} from '../paymentState/paymentStateSlice';
import { setBanner } from '../admin/adminStateSlice';

export const logoutThunk = () => (dispatch) => {
    dispatch(logout());

    dispatch(removeDepositQRData());
    dispatch(removeCreatedTime());
    dispatch(removeExpireTime());
    dispatch(removePaymentLoading());
    dispatch(setBanner(false))
    dispatch(setHasTimedOut(true));
    dispatch(setTokenExpTime(null))
    dispatch(setBanner(false))
    dispatch(setResendOtpCreatedTime(null))
    dispatch(setResendOtpExpiryTime(null))
};