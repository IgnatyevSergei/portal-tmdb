import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actorsSelector } from '../../../selectors/actorsSelector';
import './actorsPage.scss';
import { Pagination } from '@mui/material';
import { getActorInfoData, getActorMovieData, getActorsData } from '../../../actions/actionActors';
import SearchPanel from './../../appHeader/searchPanel';

const ActorsPage = () => {
  const { actors } = useSelector(actorsSelector);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const handleOpenItem = (e) => {
    const id = e.target.id
    dispatch(getActorInfoData(id));
    dispatch(getActorMovieData(id));
  }

  useEffect(() => {
    dispatch(getActorsData(page));
  }, [page, dispatch]);

  const handelChangePage = (_, num) => {
    setPage(num);
  };

  const content = actors.map(({ id, name, posterPath }) => {
    return (
      <div key={id} className='actors'>
        <div
          id={id}
          onClick={(e) => handleOpenItem(e)}
          className='actorsCard'
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${posterPath})`,
          }}></div>
        <div className='actorsName'>{name}</div>
      </div>
    );
  });

  return (
    <div className='actorPage'>
      <SearchPanel />
      <div className='actorsCardContainer'>{content}</div>
      <div className='actorsPagination'>
        <Pagination
          showFirstButton
          showLastButton
          page={page}
          count={50}
          size='large'
          color='standard'
          sx={{ button: { '&:hover': { background: '#c8c8c8' } } }}
          onChange={handelChangePage}
        />
      </div>
    </div>
  );
};

export default ActorsPage;
