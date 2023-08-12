import { options } from '../components/service/service';
import { transfortMovesData } from '../components/utils';

export const SET_All_MOVIES = 'SET_All_MOVIES';

export const setAllMoviesAC = (allMoviesData) => ({
  type: SET_All_MOVIES,
  payload: allMoviesData,
});

export const getAllMoviesData = (page = 1) =>(dispatch) => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en&page=${page}&sort_by=popularity.desc`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let res = transfortMovesData(response);
        dispatch(setAllMoviesAC(res));
      })
      .catch((err) => console.error(err));
};
