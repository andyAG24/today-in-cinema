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

// const filmList = [
//   {
//   "kinopoiskId": 301,
//   "nameRu": "Дитя погоды",
//   "nameEn": "Tenki no ko",
//   "year": 2019,
//   "posterUrl": "http://kinopoiskapiunofficial.tech/images/posters/kp/1219417.jpg",
//   "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg",
//   "countries": [
//     {
//       "country": "США",
//     },
//     {
//       "country": "Russia",
//     }
//   ],
//   "genres": [
//     {
//       "genre": "фантастика"
//     }
//   ],
//   "duration": 112,
//   "premiereRu": "2020-06-21"
// }, {
//   "kinopoiskId": 301,
//   "nameRu": "Дитя погоды",
//   "nameEn": "Tenki no ko",
//   "year": 2019,
//   "posterUrl": "http://kinopoiskapiunofficial.tech/images/posters/kp/1219417.jpg",
//   "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg",
//   "countries": [
//     {
//       "country": "США",
//     },
//     {
//       "country": "Russia",
//     }
//   ],
//   "genres": [
//     {
//       "genre": "фантастика"
//     }
//   ],
//   "duration": 112,
//   "premiereRu": "2020-06-21"
// }, ];
