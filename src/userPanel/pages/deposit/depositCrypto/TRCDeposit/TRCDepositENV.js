import io from 'socket.io-client';
import { removeDepositQRData, removePaymentLoading, removeCreatedTime, removeExpireTime, setCreatedTime, setDepositQRData, setExpireTime, setHasTimedOut } from '../../../../../globalState/paymentState/paymentStateSlice';
import { setNotification } from '../../../../../globalState/notification/notificationSlice';

export async function initiateSocketConnection({ token, network, amount, walletType, dispatch, onLogout, currentUserId }) {

    return new Promise((resolve, reject) => {
        const socket = io('https://user.boostbullion.com', {
            autoConnect: false,
            extraHeaders: {
                authorization: token
            }
        });

        socket.connect();

        socket.on('connect', () => {
            // console.log('✅ Connected');
            if (network && amount && walletType) {
                socket.emit('startPayment', { network, amount, walletType });
            }
        });

        socket.on('paymentReady', (data) => {
            dispatch(setDepositQRData(data?.data?.payment_info[0]))
            dispatch(setCreatedTime(data?.data?.created_time))
            dispatch(setExpireTime(data?.data?.expire_time))
        });

        socket.on('paymentStatus', (data) => {
            if (data) {
                dispatch(setNotification({ open: true, message: "Deposit done successfully", severity: "success" }));
                // dispatch(setHasTimedOut(true));
                dispatch(removeDepositQRData());
                dispatch(removePaymentLoading())
                dispatch(removeCreatedTime())
                dispatch(removeExpireTime())
            }
            resolve(data);
            // socket.disconnect();
        });

        socket.on("logOut", (data) => {
            // console.log('🚨 logOut event received:', data);
            resolve(data)
            if (onLogout) {
                onLogout(data, currentUserId);
            }
        })

        // socket.on('connect_error', (err) => {
        //     console.error('Connection error:', err);
        //     reject(err);
        //     socket.disconnect();
        // });

        // socket.on('error', (err) => {
        //     reject(err);
        //     socket.disconnect();
        // });
    });
}