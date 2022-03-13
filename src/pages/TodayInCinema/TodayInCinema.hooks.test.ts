import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useAlreadyInCinemaFilms } from './TodayInCinema.hooks';

jest.mock('redux/films/films.api', () => jest.fn());
jest.mock('redux/films/films.api', () => ({
  useGetPremieresQuery: jest.fn(() => ({ data: require('backend/models/PremiereResponseItemDto.mock').premieresMock }))
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
