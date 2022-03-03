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
