import React from 'react';
import { premieresMock } from 'backend/models/PremiereResponseItemDto.mock';
import { shallow, ShallowWrapper } from 'enzyme';
import { FilmList } from './FilmList';
import { FilmItem } from 'components/atoms/FilmItem';

describe('FilmList', () => {
  let filmListComponent: ShallowWrapper;
    
  beforeEach(() => {
    filmListComponent = shallow(<FilmList list={premieresMock} />);
  });

  it('should render component', () => {
    expect(filmListComponent.length).toBe(1);
  });

  it('should contain films', () => {
    const films = filmListComponent.find(FilmItem);
    expect(films.length).toBe(premieresMock.length);
  }); 
});
