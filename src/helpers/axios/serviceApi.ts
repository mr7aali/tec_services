import { baseApi } from '@/redux/api/baseApi'


export const extendedApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        getServiceData: build.query({
            query: () => ({
                url: "/service/get",
                method: "GET",
                // data: loginData
            }),
            //   invalidatesTags: ["user"]
        }),


    }),
})

export const { useGetServiceDataQuery } = extendedApi