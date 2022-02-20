import React from 'react';
import { getStringFromNestedObjectArrayByField } from './string';

describe('getStringFromNestedObjectArrayByField', () => {
  it('several elements', () => {
    const array = [{ city: 'Moscow' }, { city: 'Saint-Petersburg' }, { city: 'Kazan' }];
    const result = getStringFromNestedObjectArrayByField(array, 'city');
    expect(result).toBe('Moscow, Saint-Petersburg, Kazan');
  });

  it('only one element', () => {
    const array = [{ city: 'Moscow' }];
    const result = getStringFromNestedObjectArrayByField(array, 'city');
    expect(result).toBe('Moscow');
  });
});