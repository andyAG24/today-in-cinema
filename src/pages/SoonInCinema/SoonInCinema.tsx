import { Autocomplete, Grid, LinearProgress, TextField } from '@mui/material';
import { FilmList } from 'components/molecules/FilmList';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { useLazyGetPremieresQuery } from 'redux/films/films.api';
import { monthsValuesEn, monthsValuesRu } from 'utils/constants/months';
import * as _ from 'lodash';
import { useCurrentMonthAndYear } from 'utils/hooks/date';

export const SoonInCinema = () => {
  const now = moment().locale('en');
  const { month: currentMonthNumber, year } = useCurrentMonthAndYear();
  const [monthNumber, setMonthNumber] = useState(currentMonthNumber);
  const [getPremieres, { data: filmData, isFetching }] = useLazyGetPremieresQuery();

  const onMonthChange = (value: typeof monthsValuesRu[number]) => {
    const index = monthsValuesRu.findIndex(item => item === value);
    setMonthNumber(index);
  }

  useEffect(() => {
    getPremieres({ month: monthsValuesEn[monthNumber], year });
  }, [getPremieres, monthNumber, year]);

  const filmList = useMemo(() => {
    if (monthNumber === currentMonthNumber) {
      return filmData?.filter(film => moment(film.premiereRu).isSameOrAfter(now));
    }
    return filmData;
  }, [monthNumber, currentMonthNumber, filmData, now]);

  return (
    <Grid container item xs={'auto'}
     sx={{ m: '3rem' }}
     spacing={3}
     direction={'column'}
     >
      <Grid item>
        <Autocomplete
          disablePortal
          id='combo-box-demo'
          options={monthsValuesRu}
          value={monthsValuesRu[monthNumber]}
          onChange={(event, value) => value && onMonthChange(value)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label='Месяц' />}
        />
      </Grid>
      <Grid item>
        { (!isFetching && !(_.isEmpty(filmList))) ? 
          <FilmList list={filmList!} /> 
          : 
          <LinearProgress /> 
        }
      </Grid>
    </Grid>
  )
}