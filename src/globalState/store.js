import { configureStore } from '@reduxjs/toolkit';
import themeModeSlice from "./themeMode/themeModeSlice"
import authSlice from "./auth/authSlice"
import notificationSlice from "./notification/notificationSlice"
import walletStateSlice from "./walletState/walletStateSlice"
import { authApi } from './auth/authApis';
import { profileSettingApi } from './settings/profileSettingApi';
import { robotApi } from './robot/robotApi';
import { walletStateApis } from './walletState/walletStateApis';
import { adminStateApis } from './admin/adminStateApis';
import adminStateSlice from "./admin/adminStateSlice"

const store = configureStore({
    reducer: {
        themeMode: themeModeSlice,
        auth: authSlice,
        notification: notificationSlice,
        wallet: walletStateSlice,
        admin: adminStateSlice,
        [authApi.reducerPath]: authApi.reducer,
        [profileSettingApi.reducerPath]: profileSettingApi.reducer,
        [robotApi.reducerPath]: robotApi.reducer,
        [walletStateApis.reducerPath]: walletStateApis.reducer,
        [adminStateApis.reducerPath]: adminStateApis.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(
            authApi.middleware,
            profileSettingApi.middleware,
            robotApi.middleware,
            walletStateApis.middleware,
            adminStateApis.middleware
        )
});

export default store;