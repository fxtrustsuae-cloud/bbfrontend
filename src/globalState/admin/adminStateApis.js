import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminStateApis = createApi({
    reducerPath: "adminApis",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", token);
            }
            return headers;
        }
    }),
    tagTypes: ["userList", "supportTicket"],
    endpoints: (builder) => ({
        addFund: builder.mutation({
            query: (data) => ({
                url: "/transaction/deposit/usdt",
                method: "POST",
                body: data
            })
        }),
        userProfileUpdate: builder.mutation({
            query: (data) => ({
                url: "/user/update",
                method: "PUT",
                body: data
            }),
            invalidatesTags: (result, error, data) => [
                { type: 'userList', id: data.userId },
                { type: 'userList', id: 'PARTIAL-LIST' }
            ]
        }),
        userList: builder.query({
            query: ({ page = 1, sizePerPage = 10, search, greaterThan, lessThan, type, startDate, endDate }) => {
                const params = {};
                if (page > 0) params.page = page;
                if (sizePerPage > 0) params.sizePerPage = sizePerPage;
                if (search) params.search = search;
                if (greaterThan) params.greaterThan = greaterThan;
                if (lessThan) params.lessThan = lessThan;
                if (type) params.type = type;
                if (startDate) params.startDate = startDate;
                if (endDate) params.endDate = endDate;

                return {
                    url: "/user/list",
                    params,
                };
            },

            providesTags: (result) => {
                const data = result?.data?.docs || [];
                return data.length > 0
                    ? [
                        ...data.map((user) => ({ type: 'userList', id: user._id || user.id })),
                        { type: 'userList', id: 'PARTIAL-LIST' },
                    ]
                    : [{ type: 'userList', id: 'PARTIAL-LIST' }];
            },
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: true,
        }),
        getUserById: builder.query({
            query: ({ id }) => `/user/${id}`,
            providesTags: (result, error, { id }) => [{ type: 'userList', id }],
        }),
        editTransaction: builder.mutation({
            query: (data) => ({
                url: "/transaction/update/withdrwal",
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["userList"]
        }),
        transactionList: builder.query({
            query: ({ page = 1, sizePerPage = 10, status, transactionType, fromUserId, userId, startDate, endDate }) => {
                const params = {};
                if (page > 0) params.page = page;
                if (sizePerPage > 0) params.sizePerPage = sizePerPage;
                if (status) params.status = status;
                if (transactionType) params.transactionType = transactionType;
                if (fromUserId) params.fromUserId = fromUserId;
                if (userId) params.userId = userId;
                if (startDate) params.startDate = startDate;
                if (endDate) params.endDate = endDate;

                return {
                    url: "/transaction/list",
                    params,
                };
            },

            providesTags: (result) => {
                const data = result?.data?.docs || []
                return data.length > 0
                    ?
                    [
                        ...data.map(({ id }) => ({ type: 'userList', id })),
                        { type: 'userList', id: 'PARTIAL-LIST' },
                    ]
                    :
                    [{ type: 'userList', id: 'PARTIAL-LIST' }]
            },
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: true,
        }),
        getReferralInfo: builder.query({
            query: ({ referralCode }) => {

                const params = {};
                if (referralCode) params.referralCode = referralCode;

                return {
                    url: "/user/details",
                    params,
                };

            }
        }),
        userTransactionPasswordUpdate: builder.mutation({
            query: (data) => ({
                url: "/user/change/trx/password",
                method: "PUT",
                body: data
            })
        }),
        userLoginPasswordUpdate: builder.mutation({
            query: (data) => ({
                url: "/user/change/login/password",
                method: "PUT",
                body: data
            })
        }),
        getReferralList: builder.query({
            query: ({ userId }) => {

                const params = {};
                if (userId) params.userId = userId;

                return {
                    url: "/user/referral/tree",
                    params,
                };

            }
        }),
        getDashboardData: builder.query({
            query: () => `/dashboard`,
        }),
        replaySupportTicket: builder.mutation({
            query: (data) => ({
                url: "/support/replay",
                method: "PUT",
                body: data
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'supportTicket', id: arg.ticketId },
                { type: 'supportTicket', id: 'PARTIAL-LIST' }
            ]
        }),
        updateSupportTicket: builder.mutation({
            query: (data) => ({
                url: "/support/close",
                method: "POST",
                body: data
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'supportTicket', id: arg.ticketId },
                { type: 'supportTicket', id: 'PARTIAL-LIST' }
            ]
        }),
        supportTicketList: builder.query({
            query: ({ page = 1, sizePerPage = 10, status, priority }) => {
                const params = {};

                if (page > 0) params.page = page;
                if (sizePerPage > 0) params.sizePerPage = sizePerPage;
                if (status) params.status = status;
                if (priority) params.priority = priority;

                return {
                    url: "/support/list",
                    params,
                };
            },
            providesTags: (result) => {
                const data = result?.data?.ticketList || []
                return data.length > 0
                    ?
                    [
                        ...data.map(({ id }) => ({ type: 'supportTicket', id })),
                        { type: 'supportTicket', id: 'PARTIAL-LIST' },
                    ]
                    :
                    [{ type: 'supportTicket', id: 'PARTIAL-LIST' }]
            },
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: true,
        }),
        supportTicketById: builder.query({
            query: ({ id }) => {
                const params = {};
                if (id) params.id = id;

                return {
                    url: `/support/${id}`,
                    params,
                };
            },
            providesTags: (result, error, arg) =>
                result?.data?.id
                    ? [{ type: 'supportTicket', id: result.data.id }]
                    : [{ type: 'supportTicket', id: 'PARTIAL-LIST' }],
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: true,
        }),
        addBanner: builder.mutation({
            query: (data) => {
                const formData = new FormData();
                if (data.image instanceof File) {
                    formData.append("image", data.image);
                }
                const queryParams = new URLSearchParams({
                    title: data.title || '',
                }).toString();

                return {
                    url: `/banner/upload?${queryParams}`,
                    method: "POST",
                    body: formData,
                };
            },
            invalidatesTags: [{ type: 'addBanner', id: "PARTIAL-LIST" }]
        }),
        bannerList: builder.query({
            query: ({ page = 1, sizePerPage = 10, search = "" }) => {
                const params = {};
                if (page > 0) params.page = page;
                if (sizePerPage > 0) params.sizePerPage = sizePerPage;
                if (search) params.search = search;

                return {
                    url: "/banner",
                    params,
                };
            },
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: true,
            providesTags: [{ type: 'addBanner', id: "PARTIAL-LIST" }]
        }),
        deleteBanner: builder.mutation({
            query: (data) => {

                return {
                    url: `/banner`,
                    method: "DELETE",
                    body: data,
                };
            },
            invalidatesTags: [{ type: 'addBanner', id: "PARTIAL-LIST" }]
        }),
        getBumperOfferUserList: builder.query({
            query: () => `/transaction/bumper/offer?page=1&sizePerPage=10`,
        }),
        editDocument: builder.mutation({
            query: (data) => ({
                url: "/user/approve/kyc",
                method: "PUT",
                body: data
            }),
            invalidatesTags: [{ type: "documentList", id: "PARTIAL-LIST" }]
        }),
        documentList: builder.query({
            query: ({ page = 1, sizePerPage = 10, search = "", userId, status }) => {
                const params = {};
                if (page > 0) params.page = page;
                if (sizePerPage > 0) params.sizePerPage = sizePerPage;
                if (search) params.search = search;
                if (userId) params.userId = userId;
                if (status) params.status = status

                return {
                    url: "/user/doc/list",
                    params,
                };
            },
            providesTags: (result) => {
                const data = result?.data?.documentsList || []
                return data.length > 0
                    ?
                    [
                        ...data.map(({ id }) => ({ type: 'documentList', id })),
                        { type: 'documentList', id: 'PARTIAL-LIST' },
                    ]
                    :
                    [{ type: 'documentList', id: 'PARTIAL-LIST' }]
            },
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: true,
        }),
    })
})

export const {
    useAddFundMutation,
    useEditTransactionMutation,
    useUserListQuery,
    useGetUserByIdQuery,
    useUserProfileUpdateMutation,
    useTransactionListQuery,
    useGetReferralInfoQuery,
    useUserTransactionPasswordUpdateMutation,
    useUserLoginPasswordUpdateMutation,
    useGetReferralListQuery,
    useGetDashboardDataQuery,
    useCreateSupportTicketMutation,
    useSupportTicketListQuery,
    useSupportTicketByIdQuery,
    useReplaySupportTicketMutation,
    useUpdateSupportTicketMutation,
    useAddBannerMutation,
    useBannerListQuery,
    useDeleteBannerMutation,
    useGetBumperOfferUserListQuery,
    useDocumentListQuery,
    useEditDocumentMutation
} = adminStateApis;