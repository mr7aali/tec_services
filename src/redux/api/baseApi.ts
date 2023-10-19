import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery({ baseUrl: "https://tec-services-backend.vercel.app/api/v1" }),
    endpoints: (builder) => ({

    }),
    tagTypes: ["user", "getAllService"]
})