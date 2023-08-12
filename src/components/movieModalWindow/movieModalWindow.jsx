import React from 'react';

import './movieModalWindow.scss';
import { useSelector } from 'react-redux';
import { movieInfoSelector } from '../../selectors/movieInfoSelector';

const MovieModalWindow = ({ onClick }) => {
  const { cast, movieInfo } = useSelector(movieInfoSelector);
  const castContent = cast.map(({ name, character }) => {
    return <li key={character + name}>{name}</li>;
  });

  const {
    budget,
    homepage,
    overview,
    poster,
    title,
    release,
    runtime,
    raiting,
  } = movieInfo;
  return (
    <div
      className='movieModalWindow'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w400/${poster})`,
      }}>
      <div className='modalWindowWrap'>
        <div className='btnWrapper'>
          <button
            className='movieModalWindow__btn'
            children='X'
            onClick={onClick}
          />
        </div>
        <div className='headModalWindow'>
          <p className='headModalWindow__title'>
            <strong>{title}</strong>{' '}
          </p>
          <p>Raiting: {raiting?.toFixed(1)} </p>
        </div>
        <div className='contentWrapper'>
          <div className='poster'>
            <img
              className='poster__pict'
              src={`https://image.tmdb.org/t/p/w400/${poster}`}
              alt='poster'
            />
          </div>
          <div className='infoConetnt'>
            <p>Runtime: {runtime} min</p>
            <p>Budget: {budget}$</p>
            <p>Release: {release}</p>
            <p>{overview}</p>
            <p>
              Homepage:
              <a href={homepage} target='_blank'>
                {homepage}
              </a>
            </p>
          </div>
          <div className='cast'>
            <p className='cast__title'>Cast</p>
            <ul>{castContent}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModalWindow;
