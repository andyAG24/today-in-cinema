import { Box, LinearProgress } from '@mui/material';
import { PremiereResponseItem } from 'backend/models/PremiereResponseItemDto';
import { FilmList } from 'components/molecules/FilmList';
import moment from 'moment';
import React from 'react';
import { useGetPremieresQuery } from 'redux/films/films.api';
import { monthsValues } from 'utils/constants/months';

export const TodayInCinema = () => {
  const now = moment().locale('en');
  const monthNumber = +now.format('M') - 1;
  const year = +now.format('yyyy');
  const { data: filmList } = useGetPremieresQuery({ year, month: monthsValues[monthNumber] });
  let alreadyInCinemaFilms: PremiereResponseItem[] = [];
  if (filmList) {
    alreadyInCinemaFilms = filmList.filter((film) => {
    if (moment(film.premiereRu).isSameOrBefore(now)) return film;
  })}

  return (
    <Box sx={{ m: 5 }}>
      { alreadyInCinemaFilms ?
        <FilmList list={alreadyInCinemaFilms} />
        :
        <LinearProgress />
      }
    </Box>
  )
}
