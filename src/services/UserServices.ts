import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {INewUser, IUser } from '../types/types'

// RTK query was used to work with users API

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api' }),
    endpoints: (build) => ({
        fetchAllUsers: build.query<IUser[], any>({
            query: () => ({
                url: `/users`
            }),
            transformResponse: (rawResults: {data: IUser[]}) => rawResults.data,
            
        }),
        fetchUser: build.query<IUser, any>({
            query: (id) => ({
                url: `/users/${id}`
            }),
            transformResponse: (rawResults: {data: IUser}) => rawResults.data,
        }),
        createUser: build.mutation<any, INewUser>({
            query: (user) => ({
                url: `/register`,
                method: 'POST',
                body: user
            }),
        }),
        loginUser: build.mutation<any, INewUser>({
            query: (user) => ({
                url: `/login`,
                method: 'POST',
                body: user
            }),
        }),
    })
})
