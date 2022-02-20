import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { NavigationBar } from 'components';
import { SoonInCinema, TodayInCinema } from 'pages';
import { FilmPage } from 'pages/FilmPage/FilmPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Navigate to='/today' />} />
          <Route path='/today' element={<TodayInCinema />} />
          <Route path='/soon' element={<SoonInCinema />} />
          <Route path='/film/:id' element={<FilmPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
