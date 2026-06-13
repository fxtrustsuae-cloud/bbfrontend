import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BBMApis = createApi({
    reducerPath: "BBMApis",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}/wallet`,
        prepareHeaders: (headers) => {
            const token = sessionStorage.getItem("token");
            if (token) {
                headers.set("Authorization", token);
            }
            return headers;
        }
    }),
    tagTypes: ["burnTokenList"],
    endpoints: (builder) => ({
        burnToken: builder.mutation({
            query: (data) => ({
                url: "/burn-token",
                method: "POST",
                body: data
            }),
            invalidatesTags: [{ type: "burnTokenList", id: "PARTIAL-LIST" }]
        }),
        sellToken: builder.mutation({
            query: (data) => ({
                url: "/sell-token",
                method: "POST",
                body: data
            }),
            // invalidatesTags: ["userProfile"]
        }),
        burnTokenList: builder.query({
            query: ({ page = 1, sizePerPage = 10, 
                // status, transactionType, startDate, endDate
             }) => {
                const params = {};
                if (page > 0) params.page = page;
                if (sizePerPage > 0) params.sizePerPage = sizePerPage;
                // if (status) params.status = status;
                // if (transactionType) params.transactionType = transactionType;
                // if (startDate) params.startDate = startDate;
                // if (endDate) params.endDate = endDate;

                return {
                    url: "/burn/token/list",
                    params,
                };
            },

            providesTags: (result) => {
                const data = result?.data?.usersList || []
                return data.length > 0
                    ?
                    [
                        ...data.map(({ id }) => ({ type: 'burnTokenList', id })),
                        { type: 'burnTokenList', id: 'PARTIAL-LIST' },
                    ]
                    :
                    [{ type: 'burnTokenList', id: 'PARTIAL-LIST' }]
            },
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: true,
        }),
    })
})

export const {
    useBurnTokenMutation,
    useSellTokenMutation,
    useBurnTokenListQuery
} = BBMApis;