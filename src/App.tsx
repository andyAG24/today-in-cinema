import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { TodayInCinema } from './pages/TodayInCinema/TodayInCinema';
import { SoonInCinema } from './pages/SoonInCinema/SoonInCinema';
import { NavigationBar } from './components';

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
