import React from 'react';
import { AppBar, Button } from '@mui/material';
import { shallow, ShallowWrapper } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { NavigationBar } from './NavigationBar';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe('NavigationBar', () => {
  let navigationBarComponent: ShallowWrapper;

  beforeEach(() => {
    navigationBarComponent = shallow(<NavigationBar />, { wrappingComponent: BrowserRouter });
  });

  it('should navigate to sections', () => {
    const appBar = navigationBarComponent.find(AppBar);
    const button = appBar.find(Button).at(0);
    
    button.simulate('click');
    expect(mockedUsedNavigate).toHaveBeenCalled();
  });
});
  