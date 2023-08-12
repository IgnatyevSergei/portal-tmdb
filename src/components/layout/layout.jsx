import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getAllMoviesData } from '../../actions/actionAllMovies';
import { getActorsData } from '../../actions/actionActors';
import { useDispatch } from 'react-redux';
import './layout.scss';

const Layout = () => {
  const dispatch = useDispatch();

  const hendelClikOnFilms = () => {
    dispatch(getAllMoviesData(1));
  };

  const hendelClikOnActors = () => {
    dispatch(getActorsData(1));
  };

  return (
    <>
      <header className='headerContainer'>
        <Link to='/' className='appHeader__logo'>
          Portal TMDB
        </Link>
        <nav className='navigation'>
          <ul className='navigation__list'>
            <Link
              to='/allMovie'
              className='navigation__item'
              onClick={hendelClikOnFilms}>
              Films
            </Link>
            <Link
              to='/actors'
              className='navigation__item'
              onClick={hendelClikOnActors}>
              Actors
            </Link>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
