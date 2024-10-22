import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
    tagTypes: ['Review'],
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'bba3lu4guhgbm1dkkfc8.containers.yandexcloud.net',
    }),
    endpoints: (builder) => ({}),
});
