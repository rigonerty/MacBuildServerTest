import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILoginRegister, IResponseAuth } from './types/authApiTypes';

export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/auth/"
    }),
    endpoints:(build)=> ({
        register: build.mutation<IResponseAuth,ILoginRegister>({
            query:(data)=>({
                url:"register",
                method:"POST",
                body: data,
                credentials:"include"
            })
        }),
        login: build.mutation<IResponseAuth,ILoginRegister>({
            query:(data)=>({
                url:"login",
                method:"POST",
                body:data,
                credentials:"include"
            })
        }),
        logout: build.mutation({
            query:()=>({
                url:"logout",
                method:"POST",
                credentials:"include"
            })
        }),
        refresh: build.query<IResponseAuth,void>({
            query:()=>({
                url:"refresh",
                method:"GET",
                credentials:"include"
            })
        }),
    }),
})

export const {useRegisterMutation,useRefreshQuery,useLoginMutation,useLogoutMutation} = authApi