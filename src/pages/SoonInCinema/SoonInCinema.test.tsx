import { Autocomplete, LinearProgress } from '@mui/material';
import { FilmList } from 'components/molecules/FilmList';
import { ReactWrapper, mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';
import { useLazyGetPremieresQuery } from 'redux/films/films.api';
import { monthsValuesRu } from 'utils/constants/months';
import { SoonInCinema } from './SoonInCinema';

jest.mock('redux/films/films.api', () => jest.fn());
jest.mock('redux/films/films.api', () => ({
  useLazyGetPremieresQuery: jest.fn(),
})); 

describe('SoonInCinema', () => {
  let mockStore: MockStoreCreator;
  let store: MockStoreEnhanced;
  let wrapper: ReactWrapper;
  let soonInCinema: ReactWrapper;

  beforeEach(() => {
    mockStore = configureStore();
    store = mockStore({});
    wrapper = mount(<Provider store={store}><SoonInCinema /></Provider>, { wrappingComponent: BrowserRouter });
    soonInCinema = wrapper.find(SoonInCinema);
  });

  describe('filmData isn\'t empty', () => {
    beforeAll(() => {
      (useLazyGetPremieresQuery as jest.Mock).mockImplementation(() => {
        const premieres = require('backend/models/PremiereResponseItemDto.mock').premieresMock; 
        const getPremieres = jest.fn();
        return [getPremieres, { data: premieres, isFetching: false }]
      });

      Date.now = jest.fn().mockReturnValue(new Date('10/20/1999') as unknown as number);
    });

    it('should render component', () => {
      expect(soonInCinema).toHaveLength(1);
    });

    it('should render FilmList if month is equal to currentMonth', () => {
      const autocomplete = mount(soonInCinema.find(Autocomplete).getElement());
      autocomplete.setProps({ value: monthsValuesRu[9] });
      autocomplete.invoke('onInputChange');
      wrapper.update();

      const filmList = wrapper.find(FilmList);
      expect(filmList).toHaveLength(1);
      expect(filmList.prop('list')).toHaveLength(2);
    });

    it('should render FilmList if month isn\'t equal to currentMonth', () => {
      const autocomplete = mount(soonInCinema.find(Autocomplete).getElement());
      autocomplete.setProps({ value: monthsValuesRu[10] });
      autocomplete.invoke('onInputChange');
      wrapper.update();

      const filmList = wrapper.find(FilmList);
      expect(filmList).toHaveLength(1);
      expect(filmList.prop('list')).toHaveLength(3);
    });
  });

  describe('filmData is empty', () => {
    beforeAll(() => {
      (useLazyGetPremieresQuery as jest.Mock).mockImplementation(() => {
        const getPremieres = jest.fn();
        return [getPremieres, { data: undefined, isFetching: false }]
      })
    });

    it('should render LinearProgress', () => {
      const linearProgress = soonInCinema.find(LinearProgress);
      expect(linearProgress).toHaveLength(1);
    });
  });
});
