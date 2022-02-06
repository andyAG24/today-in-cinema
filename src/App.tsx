import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NavigationBar } from 'components';
import { SoonInCinema, TodayInCinema } from 'pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/today' element={<TodayInCinema />} />
          <Route path='/soon' element={<SoonInCinema />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
