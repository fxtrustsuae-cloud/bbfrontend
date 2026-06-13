import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { login, setUserData, setTempToken, setTokenExpTime } from "./authSlice";
import { jwtDecode } from "jwt-decode";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}/auth`,
        prepareHeaders: (headers, { getState }) => {
            const state = getState();
            const token = state.auth.token || state.auth.tempToken;
            if (token) {
                headers.set("Authorization", token);
            }
            return headers;
        },
    }),
    tagTypes: ["signInHistory"],
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data?.data) {
                        dispatch(setUserData(data?.data?.userData))
                    }
                } catch (error) {
                    console.error("Login failed:", error);
                }
            }
        }),
        signIn: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data?.data) {

                        const decoded = jwtDecode(data?.data?.token);

                        dispatch(login(data?.data?.token));
                        dispatch(setTokenExpTime(decoded?.exp))
                    }
                } catch (error) {
                    console.error("Login failed:", error);
                }
            }
        }),
        signInHistory: builder.query({
            query: ({ page = 1, sizePerPage = 10 }) => `/login/history?page=${page}&sizePerPage=${sizePerPage}`,
            providesTags: ['signInHistory'],
        }),
        changePassword: builder.mutation({
            query: (data) => ({
                url: "/change/password",
                method: "PUT",
                body: data
            })
        }),
        forgotPasswordSendOTP: builder.mutation({
            query: (data) => ({
                url: "/forgot/password/sendotp",
                method: "POST",
                body: data
            })
        }),
        forgotPasswordVerifyOTP: builder.mutation({
            query: (data) => (
                {
                    url: "/forgot/password/verify/otp",
                    method: "PATCH",
                    body: data
                }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data?.data) {
                        dispatch(setTempToken(data?.data));
                    }
                } catch (error) {
                    console.error("Login failed:", error);
                }
            }
        }),
        resetPassword: builder.mutation({
            query: (data) => ({
                url: "/reset/password",
                method: "PUT",
                body: data
            })
        }),
        verifyEmailAndMobile: builder.mutation({
            query: (data) => ({
                url: "/send/otp",
                method: "POST",
                body: data
            })
        }),
        verifyEmailAndMobileOtp: builder.mutation({
            query: (data) => (
                {
                    url: "/verify/otp",
                    method: "PATCH",
                    body: data
                }
            )
        }),
        referralInfo: builder.query({
            query: ({ referralCode }) => {

                const params = {};
                if (referralCode) params.referralCode = referralCode;

                return {
                    url: "/referral/info",
                    params,
                };

            }
        }),
    })
})

export const {
    useSignUpMutation,
    useSignInMutation,
    useSignInHistoryQuery,
    useChangePasswordMutation,
    useForgotPasswordSendOTPMutation,
    useForgotPasswordVerifyOTPMutation,
    useResetPasswordMutation,
    useVerifyEmailAndMobileMutation,
    useVerifyEmailAndMobileOtpMutation,
    useReferralInfoQuery
} = authApi;