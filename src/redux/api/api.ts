import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    tagTypes: ['Todo'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => ({
                url: '/task',
                method: 'GET',
            }),
            providesTags:['todo']
        }),
        addTodos: builder.mutation({
            query: (data) => ({
                url: '/task',
                method: 'POST',
                body:data,
            }),
            invalidatesTags: ["todo"]
        }),
    })
})

export const { useGetTodosQuery,useAddTodosMutation } = baseApi;