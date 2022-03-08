import React from 'react';
import { TodayInCinema } from './TodayInCinema';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { FilmList } from 'components/molecules/FilmList';
import { FilmItem } from 'components/atoms/FilmItem';
import { LinearProgress } from '@mui/material';

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
jest.mock('./TodayInCinema.hooks', () => ({
  useAlreadyInCinemaFilms: jest.fn().mockReturnValue(filmArr)
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

    expect(listCount).toBe(filmArr.length);
    expect(filmItem).toHaveLength(filmArr.length);
  }); 

  it('should render LinearProgress', () => {
    jest.resetAllMocks();
    const otherWrapper = mount(<Provider store={store}><TodayInCinema /></Provider>, { wrappingComponent: BrowserRouter });
    const linearProgress = otherWrapper.find(TodayInCinema).find(LinearProgress);

    expect(linearProgress).toHaveLength(1);
  });
});
