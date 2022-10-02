import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {INewUser, IRawData, IUser } from '../types/types'

// RTK query was used to work with users API

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api' }),
    endpoints: (build) => ({
        fetchAllUsers: build.query<IUser[], number>({
            query: (page) => ({
                url: `/users?page=${page}`,

            }),
            transformResponse: (rawResults: {data: IUser[]}) => rawResults.data,
            
        }),
        fetchUser: build.query<IUser, string | undefined>({
            query: (id) => ({
                url: `/users/${id}`
            }),
            transformResponse: (rawResults: {data: IUser}) => rawResults.data,
        }),
        createUser: build.mutation<null, INewUser>({
            query: (user) => ({
                url: `/register`,
                method: 'POST',
                body: user
            }),
        }),
        loginUser: build.mutation<null, INewUser>({
            query: (user) => ({
                url: `/login`,
                method: 'POST',
                body: user
            }),
        }),
    })
})
