import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

const token = 'e61acf76-76fe-44ac-8c9e-f9377b1c2085';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2',
  prepareHeaders: (headers) => {
    headers.set('X-API-KEY', token);
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});
