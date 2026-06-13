import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const robotApi = createApi({
    reducerPath: "robotApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}/robot`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", token);
            }
            return headers;
        }
    }),
    tagTypes: ["robotList"],
    endpoints: (builder) => ({
        createRobot: builder.mutation({
            query: (data) => ({
                url: "/create",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["robotList"]
        }),
        robotList: builder.query({
            query: ({ page = 1, sizePerPage = 10 }) => `/list?page=${page}&sizePerPage=${sizePerPage}`,
            providesTags: ['robotList'],
        }),
    })
})

export const {
    useCreateRobotMutation,
    useRobotListQuery
} = robotApi;