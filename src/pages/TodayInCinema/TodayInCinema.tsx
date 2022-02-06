import { Box } from '@mui/material';
import { PremiereList } from 'components/molecules/PremiereList';
import React from 'react';

export const TodayInCinema = () => {
  return (
    <Box sx={{ m: 5 }}>
      <PremiereList list={filmList} />
    </Box>
  )
}

const filmList = [
  {
  "kinopoiskId": 301,
  "nameRu": "Дитя погоды",
  "nameEn": "Tenki no ko",
  "year": 2019,
  "posterUrl": "http://kinopoiskapiunofficial.tech/images/posters/kp/1219417.jpg",
  "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg",
  "countries": [
    {
      "country": "США",
    },
    {
      "country": "Russia",
    }
  ],
  "genres": [
    {
      "genre": "фантастика"
    }
  ],
  "duration": 112,
  "premiereRu": "2020-06-21"
}, {
  "kinopoiskId": 301,
  "nameRu": "Дитя погоды",
  "nameEn": "Tenki no ko",
  "year": 2019,
  "posterUrl": "http://kinopoiskapiunofficial.tech/images/posters/kp/1219417.jpg",
  "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg",
  "countries": [
    {
      "country": "США",
    },
    {
      "country": "Russia",
    }
  ],
  "genres": [
    {
      "genre": "фантастика"
    }
  ],
  "duration": 112,
  "premiereRu": "2020-06-21"
}, ];
