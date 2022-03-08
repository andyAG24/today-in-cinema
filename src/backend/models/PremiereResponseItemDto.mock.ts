import { PremiereResponseItem } from './PremiereResponseItemDto';

export const premiereMock: PremiereResponseItem = {
  kinopoiskId: 301,
  nameRu: 'Матрица',
  nameEn: 'The Matrix',
  year: 1999,
  posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg',
  posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg',
  countries: [
    {
      country: 'США',
    },
    {
      country: 'Австралия',
    },
  ],
  genres: [
    {
      genre: 'фантастика'
    },
    {
      genre: 'боевик'
    },
  ],
  duration: 136,
  premiereRu: '1999-10-14',
}

export const premieresMock: PremiereResponseItem[] = [
  {
    kinopoiskId: 301,
    nameRu: 'Матрица',
    nameEn: 'The Matrix',
    year: 1999,
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg',
    posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg',
    countries: [
      {
        country: 'США',
      },
      {
        country: 'Австралия',
      },
    ],
    genres: [
      {
        genre: 'фантастика'
      },
      {
        genre: 'боевик'
      },
    ],
    duration: 136,
    premiereRu: '1999-10-14',
  },
  {
    kinopoiskId: 7094,
    nameRu: 'Призрак дома на холме',
    nameEn: 'The Haunting',
    year: 1999,
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/7094.jpg',
    posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/7094.jpg',
    countries: [
      {
        country: 'США'
      },
      {
        country: 'Великобритания'
      }
    ],
    genres: [
      {
        genre: 'ужасы'
      },
      {
        genre: 'фэнтези'
      },
      {
        genre: 'триллер'
      }
    ],
    duration: 113,
    premiereRu: '1999-10-20'
  },
  {
    kinopoiskId: 6219,
    nameRu: 'Вирус',
    nameEn: 'Virus',
    year: 1998,
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/6219.jpg',
    posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/6219.jpg',
    countries: [
      {
        country: 'США'
      },
      {
        country: 'Великобритания'
      },
      {
        country: 'Германия'
      }
    ],
    genres: [
      {
        genre: 'ужасы'
      },
      {
        genre: 'фантастика'
      },
      {
        genre: 'боевик'
      }
    ],
    duration: 99,
    premiereRu: '1999-10-21'
  },
];
