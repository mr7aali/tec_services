// import { IResponseType, IService } from '@/interface/type';
// import { baseApi } from '@/redux/api/baseApi'

import { baseApi } from "./baseApi";


// export const extendedApi = baseApi.injectEndpoints({
//   endpoints: (buil) => ({



//     getPokemonByName: buil.query<IResponseType<IService[]>,any>({
//         query: () => `pokemon/`,
//       }),


//   }),
// })

// export const {  } = extendedApi;


const extendedApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getService: build.query({
            query: () => ({
                url: '/service/get', // Provide the correct URL
                method: 'GET',   // Specify the HTTP method (GET, POST, etc.)
                // Add any other necessary properties here
            }),
        }),
        getBooking: build.query({
            query: () => ({
                url: '/service/get', // Provide the correct URL
                method: 'GET',   // Specify the HTTP method (GET, POST, etc.)
                // Add any other necessary properties here
            }),
        }),

        bookingService: build.mutation({
            query: (bookingServiceData) => ({
                url: "/booking/create",                
                method: "POST",
                data: bookingServiceData
            }),
            // invalidatesTags: ["user"]
        }),

    }),

});

export const { useGetServiceQuery,useBookingServiceMutation } = extendedApi;