import { createApi } from '@reduxjs/toolkit/query/react';
import { filmsEndpoints } from 'backend/api/films/films.endpoints';
import { PremiereGetResponseParams } from 'backend/api/films/films.type';
import { FilmDto, KinopoiskID } from 'backend/models/FilmDto';
import { PremiereResponseItem } from 'backend/models/PremiereResponseItemDto';
import { baseQuery } from 'redux/baseQuery';

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: baseQuery,
  endpoints: (build) => ({
    getFilm: build.query<FilmDto, KinopoiskID>({
      query: (id) => filmsEndpoints.getFilm(id),
    }),
    getPremieres: build.query<PremiereResponseItem[], PremiereGetResponseParams>({
      query: (params) => filmsEndpoints.getPremieres(params),
      transformResponse: (response: { items: PremiereResponseItem[], total: number }) => response.items,
    }),
  }),
});

export const { 
  useGetFilmQuery,
  useGetPremieresQuery, 
  useLazyGetPremieresQuery, 
} = filmsApi;
