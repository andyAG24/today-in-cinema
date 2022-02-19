import { Grid, LinearProgress } from '@mui/material';
import { PremiereResponseItem } from 'backend/models/PremiereResponseItemDto';
import { FilmList } from 'components/molecules/FilmList';
import moment from 'moment';
import React from 'react';
import { useGetPremieresQuery } from 'redux/films/films.api';
import { monthsValuesEn } from 'utils/constants/months';

export const TodayInCinema = () => {
  const now = moment().locale('en');
  const monthNumber = +now.format('M') - 1;
  const year = +now.format('yyyy');
  const { data: filmList } = useGetPremieresQuery({ year, month: monthsValuesEn[monthNumber] });

  let alreadyInCinemaFilms: PremiereResponseItem[] = [];
  if (filmList) {
    alreadyInCinemaFilms = filmList.filter((film) => {
    if (moment(film.premiereRu).isSameOrBefore(now)) return film;
  })}

  return (
    <Grid container item xs={'auto'}
     sx={{ m: '3rem' }}
     spacing={3}
     direction={'column'}
     >
      <Grid item>
        { alreadyInCinemaFilms ?
          <FilmList list={alreadyInCinemaFilms} />
          :
          <LinearProgress />
        }
      </Grid>
    </Grid>
  )
}
