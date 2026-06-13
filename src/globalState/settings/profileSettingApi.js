import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileSettingApi = createApi({
    reducerPath: "profileSettingApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}`,
        prepareHeaders: (headers) => {
            const token = sessionStorage.getItem("token");
            if (token) {
                headers.set("Authorization", token);
            }
            return headers;
        }
    }),
    tagTypes: ["bankDetails", "userProfile"],
    endpoints: (builder) => ({
        updateProfile: builder.mutation({
            query: (data) => ({
                url: "/profile/update",
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["userProfile"]
        }),
        getTransactionData: builder.query({
            query: ({ page = 1, sizePerPage = 10, status = "", transactionType = "" }) => {
                const params = new URLSearchParams();
                params.append("page", page);
                params.append("sizePerPage", sizePerPage);
                if (status) params.append("status", status);
                if (transactionType) params.append("transactionType", transactionType);

                return `transaction/list?${params.toString()}`;
            }
        }),
        getUserProfile: builder.query({
            query: () => `/profile`,
            providesTags: ["userProfile"]
        }),
        getReferralList: builder.query({
            query: () => `/profile/referral/list`
        }),
        uploadDocument: builder.mutation({
            query: (data) => {

                const formData = new FormData();

                if (data.poi instanceof File) {
                    formData.append("poi", data.poi);
                }
                if (data.poa instanceof File) {
                    formData.append("poa", data.poa);
                }
                if (data.extraDocs instanceof File) {
                    formData.append("extraDocs", data.extraDocs);
                }

                if (Array.isArray(data.extraDocs) && data.extraDocs.length > 0) {
                    data.extraDocs.forEach((file) => {
                        formData.append("extraDocs", file);
                    });
                }

                return {
                    url: `/profile/upload/doc`,
                    method: "POST",
                    body: formData,
                };
            },
            invalidatesTags: [{ type: 'documentList', id: "PARTIAL-LIST" }]
        }),
        getDocumentData: builder.query({
            query: () => `/profile/doc`,
            providesTags: ['documentDetails'],
        }),
        getTopPerformersList: builder.query({
            query: () => `/profile/top/performers`
        }),
    })
})

export const {
    useUpdateProfileMutation,
    useGetTransactionDataQuery,
    useGetUserProfileQuery,
    useGetReferralListQuery,
    useGetDocumentDataQuery,
    useUploadDocumentMutation,
    useGetTopPerformersListQuery
} = profileSettingApi;