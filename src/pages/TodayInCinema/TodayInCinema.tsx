import React from 'react';
import { Grid, LinearProgress } from '@mui/material';
import { FilmList } from 'components/molecules/FilmList';
import { useAlreadyInCinemaFilms } from './TodayInCinema.hooks';

export const TodayInCinema = () => {
  const alreadyInCinemaFilms = useAlreadyInCinemaFilms();

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
