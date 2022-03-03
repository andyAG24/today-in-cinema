import React from 'react';
import { Card, CardActionArea, CardHeader, Typography, CardContent } from '@mui/material';
import { premiereMock } from 'backend/models/PremiereResponseItemDto.mock';
import { shallow, ShallowWrapper } from 'enzyme';
import { FilmItem } from './FilmItem';

function getFilmItemTitle(component: ShallowWrapper) {
  const cardHeader = component.find(CardHeader).getElement();
  const { title } = cardHeader.props.title.props;
  return title;
}

describe('FilmItem', () => {
  let filmItemComponent: ShallowWrapper;
    
  beforeEach(() => {
    filmItemComponent = shallow(<FilmItem film={premiereMock} />);
  });

  it('should render Card', () => {
    const card = filmItemComponent.find(Card);
    expect(card.length).toBe(1);
  });

  it('should contain Link', () => {
    const cardActionArea = filmItemComponent.find(CardActionArea).getElement();
    const route = `/film/${premiereMock.kinopoiskId}`;
    expect(cardActionArea.props['to']).toBe(route);
  });

  it('should render original film name and year correctly (nameEn exists)', () => {
    const cardContent = filmItemComponent.find(CardContent);
    const originalFilmNameAndYearElement = cardContent
      .find(Typography)
      .findWhere(element => element.key() === 'originalFilmNameAndYear')
      .getElement()
      .props
      .children;
    const standard = premiereMock.nameEn + ', ' + premiereMock.year;

    expect(originalFilmNameAndYearElement).toEqual(standard);
  });
  it('should render original film name and year correctly (nameEn doesn\'t exist)', () => {
    const modifiedPremiereMock = {
      ...premiereMock,
      nameEn: '',
    };

    const otherFilmItemComponent = shallow(<FilmItem film={modifiedPremiereMock} />);
    const cardContent = otherFilmItemComponent.find(CardContent);
    const originalFilmNameAndYearElement = cardContent
      .find(Typography)
      .findWhere(element => element.key() === 'originalFilmNameAndYear')
      .getElement()
      .props
      .children;
    const standard = premiereMock.year;

    expect(+originalFilmNameAndYearElement).toEqual(standard);
  });

  it('should render film name correctly (nameRu exists)', () => {
    const { nameRu } = premiereMock;
    const standard = nameRu;

    expect(getFilmItemTitle(filmItemComponent)).toEqual(standard);
  });
  it('should render film name correctly (nameRu doesn\'t exist)', () => {
    const modifiedPremiereMock = {
      ...premiereMock,
      nameRu: '',
    };
    const { nameEn } = modifiedPremiereMock;
    const standard = nameEn;

    const otherFilmItemComponent = shallow(<FilmItem film={modifiedPremiereMock} />);

    expect(getFilmItemTitle(otherFilmItemComponent)).toEqual(standard);
  });
});
