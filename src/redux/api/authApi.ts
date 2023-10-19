import { baseApi } from '@/redux/api/baseApi'


export const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    userLogin: build.mutation({
      query: (loginData) => ({
        url: "/auth/signin",
        method: "POST",
        data: loginData
      }),
      invalidatesTags: ["user"]
    }),
    userSignUp: build.mutation({
      query: (loginData) => ({
        url: "/user/signup",
        method: "POST",
        data: loginData
      }),
      invalidatesTags: ["user"]
    }),
    getUser: build.query({
      query: (id) => ({
        url: `/user/${id}`, // Provide the correct URL
        method: 'GET',   // Specify the HTTP method (GET, POST, etc.)
        // Add any other necessary properties here
      }),
    }),

  }),
})

export const {
  useUserLoginMutation,
  useUserSignUpMutation,
  useGetUserQuery
} = extendedApi;