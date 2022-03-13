import React from 'react';
import { TodayInCinema } from './TodayInCinema';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { FilmList } from 'components/molecules/FilmList';
import { FilmItem } from 'components/atoms/FilmItem';
import { LinearProgress } from '@mui/material';
import { premieresMock } from 'backend/models/PremiereResponseItemDto.mock';

jest.mock('redux/films/films.api', () => jest.fn());
jest.mock('./TodayInCinema.hooks', () => ({
  useAlreadyInCinemaFilms: jest.fn().mockReturnValue(require('backend/models/PremiereResponseItemDto.mock').premieresMock)
}));

describe('TodayInCinema', () => {
  let mockStore: MockStoreCreator;
  let store: MockStoreEnhanced;
  let wrapper: ReactWrapper;
  let todayInCinema: ReactWrapper;

  beforeEach(() => {
    mockStore = configureStore();
    store = mockStore({});
    wrapper = mount(<Provider store={store}><TodayInCinema /></Provider>, { wrappingComponent: BrowserRouter });
    todayInCinema = wrapper.find(TodayInCinema);
  });

  it('should render component', () => {
    expect(todayInCinema.length).toBe(1);
  }); 

  it('should render FilmList with films', () => {
    const filmList = todayInCinema.find(FilmList);
    const filmItem = filmList.find(FilmItem);
    const listCount = filmList.prop('list').length;

    expect(listCount).toBe(premieresMock.length);
    expect(filmItem).toHaveLength(premieresMock.length);
  }); 

  it('should render LinearProgress', () => {
    jest.resetAllMocks();
    const otherWrapper = mount(<Provider store={store}><TodayInCinema /></Provider>, { wrappingComponent: BrowserRouter });
    const linearProgress = otherWrapper.find(TodayInCinema).find(LinearProgress);

    expect(linearProgress).toHaveLength(1);
  });
});
