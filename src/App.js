import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './components/Pages/HomePage/HomePage';

import './App.css';
import TopFilms from './components/Pages/TopFilms/TopFilms';
import PremierFilms from './components/Pages/PremierFilms/PremierFilms';
import DigitalReleasFilms from './components/Pages/DigitalReleasFilms/DigitalReleasFilms';
import DetailFilmPage from './components/Pages/DetailFilmPage/DetailFilmPage'
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import Layout from './components/Layouts/Layout/Layout';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout></Layout>}>
        <Route index path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/top' element={<TopFilms></TopFilms>}></Route>
        <Route path='/premiers' element={<PremierFilms></PremierFilms>}></Route>
        <Route path='/digitalRelease' element={<DigitalReleasFilms></DigitalReleasFilms>}></Route>
        <Route path='/films/:id' element={<DetailFilmPage></DetailFilmPage>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
