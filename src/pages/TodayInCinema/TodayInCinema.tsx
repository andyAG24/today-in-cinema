import { Box, LinearProgress } from '@mui/material';
import { PremiereList } from 'components/molecules/PremiereList';
import moment from 'moment';
import React from 'react';
import { useGetPremieresQuery } from 'redux/films/films.api';
import { monthsValues } from 'utils/constants/months';

export const TodayInCinema = () => {
  const now = moment().locale('en');
  const monthNumber = +now.format('M') - 1;
  const year = +now.format('yyyy');
  const { data: filmList } = useGetPremieresQuery({ year, month: monthsValues[monthNumber] });

  return (
    <Box sx={{ m: 5 }}>
      { filmList ?
        <PremiereList list={filmList} />
        :
        <LinearProgress />
      }
    </Box>
  )
}
