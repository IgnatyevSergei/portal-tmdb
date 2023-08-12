import React from 'react';
import { useSelector } from 'react-redux';
import { topMoviesSelector } from '../../../selectors/topMoviesSelector';

import './topMoviePage.scss';
import Card from '../../card/card';

const TopMoviePage = () => {
  const { topMovies } = useSelector(topMoviesSelector);

  return (
    <>
      <h3 className='topMovieTitle'>Top 20 movies</h3>
      <Card movie={topMovies} />;
    </>
  );
};

export default TopMoviePage;
