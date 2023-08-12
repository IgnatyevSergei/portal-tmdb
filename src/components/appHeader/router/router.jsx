import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AllMoviesPage from '../../pages/allMoviesPage';
import ActorsPage from '../../pages/actorsPage';
import TopMoviePage from '../../pages/topMoviePage';
import NotFoundPage from '../../notFoundPage';
import Layout from '../../layout/layout';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<TopMoviePage />} />
          <Route path='/allMovie' element={<AllMoviesPage />} />
          <Route path='/actors' element={<ActorsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
