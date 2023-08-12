import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@mui/material';

import { allMoviesSelector } from '../../../selectors/allMoviesSelector';
import './allMoviesPage.scss';
import Card from '../../card/card';
import { getAllMoviesData } from '../../../actions/actionAllMovies';
import SearchPanel from './../../appHeader/searchPanel';

const AllMoviesPage = () => {
  const { allMovies } = useSelector(allMoviesSelector);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMoviesData(page));
  }, [page, dispatch]);

  const handelChangePage = (_, num) => {
    setPage(num);
  };

  return (
    <div className='allMoviesConainer'>
      <SearchPanel />
      <Card movie={allMovies} />
      <div className='allMoviesPaginator'>
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

export default AllMoviesPage;
