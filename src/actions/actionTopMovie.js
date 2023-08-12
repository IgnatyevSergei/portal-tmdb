import { options } from '../components/service/service';
import { transfortMovesData } from '../components/utils';
export const SET_TOP_MOVIES = 'SET_TOP_MOVIES';

export const setTopMovies = (movieData) => ({
  type: SET_TOP_MOVIES,
  payload: movieData,
});

export const getTopMoviesData = () => (dispatch) => {
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-Us', options)
    .then((response) => response.json())
    .then((response) => {
      let res = transfortMovesData(response);
      dispatch(setTopMovies(res));
    })
    .catch((err) => console.error(err));
};
