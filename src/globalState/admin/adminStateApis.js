import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminStateApis = createApi({
    reducerPath: "adminApis",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://user.boostbullion.com/admin",
        prepareHeaders: (headers) => {
            const token = sessionStorage.getItem("token");
            if (token) {
                headers.set("Authorization", token);
            }
            return headers;
        }
    }),
    tagTypes: [],
    endpoints: (builder) => ({
        getBanner: builder.query({
            query: () => `/banner`
        }),
    })
})

export const {
    useGetBannerQuery
} = adminStateApis;