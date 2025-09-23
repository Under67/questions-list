import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API }),
  endpoints: () => ({}),
});

export default baseApi;
