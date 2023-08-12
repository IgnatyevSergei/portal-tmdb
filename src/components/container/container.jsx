import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './container.scss';
import { getTopMoviesData } from '../../actions/actionTopMovie';

const Container = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopMoviesData());
  }, [dispatch]);

  return <div className='appContainer'>{props.children}</div>;
};

export default Container;
