import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key','ac634efb9cmshe1ebde4fdfb69abp1d40f2jsn28198398f583')

            return headers 
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' })
    })
})

export const {
    useGetTopChartsQuery,
} = shazamCoreApi