import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetFilmQuery } from 'redux/films/films.api';

export const FilmPage = () => {
  const { id } = useParams();

  const { data, isFetching } = useGetFilmQuery(+id!);

  return (
    <div>{!isFetching && data?.nameRu}</div>
  )
}