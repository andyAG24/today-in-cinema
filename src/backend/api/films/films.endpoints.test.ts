import React from 'react';
import { filmsEndpoints, urls } from './films.endpoints';
import { PremiereGetResponseParams } from './films.type';

describe('films endpoints', () => {
  it('controller', () => {
    expect(urls.films).toEqual('films');
    expect(urls.premieres).toEqual('films/premieres');
  });

  it('getFilm', () => {
    const id = 123;
    const standard = { url: `${urls.films}/${id}` };
    const result = filmsEndpoints.getFilm(id);

    expect(result).toEqual(standard);
  });

  it('getPremieres', () => {
    const params: PremiereGetResponseParams = {
      month: 'OCTOBER',
      year: 1999,
    };
    const standard = { 
      url: urls.premieres,
      params,
    };
    const result = filmsEndpoints.getPremieres(params);

    expect(result).toEqual(standard);
  });
});
