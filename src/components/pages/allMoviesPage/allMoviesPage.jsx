import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@mui/material';

import { allMoviesSelector } from '../../../selectors/allMoviesSelector';
import './allMoviesPage.scss';
import Card from '../../card/card';
import {
  getAllMoviesData,
  searchMovie,
} from '../../../actions/actionAllMovies';
import SearchPanel from './../../appHeader/searchPanel';

const AllMoviesPage = () => {
  const { allMovies, searchMovies } = useSelector(allMoviesSelector);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMoviesData(page));
    dispatch(searchMovie(search, page));
  }, [page, dispatch, search]);

  const handelChangePage = (_, num) => {
    setPage(num);
  };

  const handleSearchActor = (e) => {
    setSearch(e.target.value);
    dispatch(searchMovie(search));
  };

  return (
    <div className='allMoviesConainer'>
      <SearchPanel onChange={handleSearchActor} />
      <Card movie={searchMovies.length > 0 ? searchMovies : allMovies} />
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
