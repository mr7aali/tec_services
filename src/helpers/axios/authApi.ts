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

  }),
})

export const { useUserLoginMutation, useUserSignUpMutation } = extendedApi