import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
    tagTypes: ['Review'],
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://test-tonidimon.amvera.io',
    }),
    endpoints: (builder) => ({}),
});
