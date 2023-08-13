import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actorsSelector } from '../../../selectors/actorsSelector';
import './actorsPage.scss';
import { Pagination } from '@mui/material';
import {
  getActorInfoData,
  getActorMovieData,
  getActorsData,
  searchActor,
} from '../../../actions/actionActors';
import SearchPanel from './../../appHeader/searchPanel';
import ActorsMovieWindow from '../../actorsMovieWindow/actorsMovieWindow';

const ActorsPage = () => {
  const { actors, searchData } = useSelector(actorsSelector);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleOpenItem = (e) => {
    const id = e.target.id;
    dispatch(getActorInfoData(id));
    dispatch(getActorMovieData(id));
    setShow(true);
  };

  const handleCloseItem = () => {
    setShow(false);
  };

  const handleSearchActor = (e) => {
    setSearch(e.target.value);
    dispatch(searchActor(search));
  };

  useEffect(() => {
    dispatch(getActorsData(page));
    dispatch(searchActor(search, page));
  }, [page, dispatch, search]);

  const handelChangePage = (_, num) => {
    setPage(num);
  };

  const searchContent = searchData.map(({ id, name, posterPath }) => {
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
    <>
      <div className='actorPage'>
        <SearchPanel onChange={handleSearchActor} />
        <div className='actorsCardContainer'>
          {searchData.length > 0 ? searchContent : content}
        </div>
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
      {show && <ActorsMovieWindow onClick={handleCloseItem} />}
    </>
  );
};

export default ActorsPage;
