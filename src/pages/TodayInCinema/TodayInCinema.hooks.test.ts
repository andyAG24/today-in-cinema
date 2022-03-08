import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useAlreadyInCinemaFilms } from './TodayInCinema.hooks';

jest.mock('redux/films/films.api', () => jest.fn());
const filmArr = [{
  kinopoiskId: 301,
  nameRu: 'Матрица',
  nameEn: 'The Matrix',
  year: 1999,
  posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg',
  posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg',
  countries: [{ country: 'США', }, { country: 'Австралия', }],
  genres: [{ genre: 'фантастика' }, { genre: 'боевик' },],
  duration: 136,
  premiereRu: '1999-10-14',
}];
jest.mock('redux/films/films.api', () => ({
  useGetPremieresQuery: jest.fn(() => ({ data: filmArr }))
}));

describe('TodayInCinema hooks', () => {
  describe('useAlreadyInCinemaFilms', () => {
    beforeEach(() => {
      jest.mock('./TodayInCinema.hooks', () => ({
        useCurrentMonthAndYear: jest.fn()
      }));
    });

    it('should return array if premiere is same or before then current date', () => {
      Date.now = jest.fn().mockReturnValue(new Date('10/15/1999') as unknown as number);

      const { result } = renderHook(() => useAlreadyInCinemaFilms());

      expect(result.current?.length).toBeGreaterThan(0);
    });

    it('should return empty array if premiere is after then current date', () => {
      Date.now = jest.fn().mockReturnValue(new Date('10/13/1999') as unknown as number);

      const { result } = renderHook(() => useAlreadyInCinemaFilms());

      expect(result.current?.length).toBe(0);
    });

    it('should return empty array if filmList is undefined', () => {
      jest.mock('redux/films/films.api', () => ({
        useGetPremieresQuery: jest.fn(() => ({ data: undefined }))
      }));

      const { result } = renderHook(() => useAlreadyInCinemaFilms());

      expect(result.current).toEqual([]);
    });
  });
});
