import React, { useState } from 'react';
import { useDispatch} from 'react-redux';

import './card.scss';
import { getCast, getMovieInfoData } from '../../actions/actionMovieInfo';
import MovieModalWindow from '../movieModalWindow/movieModalWindow';

const Card = ({ movie }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleOpenCard = (e) => {
    const id = e.target.id;
    dispatch(getMovieInfoData(id));
    dispatch(getCast(id));
    setShow(true);
  };

  const handleCloseCard = () => {
    setShow(false);
  };

  const content = movie.map(({ id, posterPath, raiting }) => {
    return (
      <div
        onClick={(e) => handleOpenCard(e)}
        id={id}
        key={id}
        className='card'
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w400/${posterPath})`,
        }}>
        <div className='raiting'>{raiting}</div>
      </div>
    );
  });
  return (
    <>
      <div className='cardContainer'>{content}</div>
      {show && <MovieModalWindow onClick={handleCloseCard} />}
    </>
  );
};

export default Card;
