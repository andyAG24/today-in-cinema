import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useCurrentMonthAndYear } from '.';

describe('TodayInCinema hooks', () => {
  it('useCurrentMonthAndYear', () => {
    const { result } = renderHook(() => useCurrentMonthAndYear());
    
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    expect(result.current).toEqual({ month: currentMonth, year: currentYear });
  });
});
