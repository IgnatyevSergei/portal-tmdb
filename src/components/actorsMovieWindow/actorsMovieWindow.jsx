import React from 'react';

import './actorsMovieWindow.scss';
import { useSelector } from 'react-redux';
import { actorsSelector } from '../../selectors/actorsSelector';

const ActorsMovieWindow = ({ onClick }) => {
  const { actorInfo} = useSelector(actorsSelector);
  const { name, birthday, deathday, biography, poster, placeOfBirth } =
    actorInfo;

  return (
    <div className='actorModalWindow'>
      <div className='actorModalWindowWrap'>
        <div className='btnWrapper'>
          <button
            className='movieModalWindow__btn'
            children='X'
            onClick={onClick}
          />
        </div>
        <div className='headModalWindow'>
          <p className='headModalWindow__title'>{name}</p>
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
            <p>Birth day: {birthday}</p>
            <p>Place of birth: {placeOfBirth}</p>
            {deathday !== null && <p>Death day: {deathday} </p>}
            <p>{biography}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorsMovieWindow;
