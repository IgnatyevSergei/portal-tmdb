import { SET_CAST, SET_MOVIE_INFO } from '../actions/actionMovieInfo';

const initialState = {
  movieInfo: [],
  cast: [],
};

export const movieInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE_INFO:
      return {
        ...state,
        movieInfo: action.payload,
      };
    case SET_CAST:
      return {
        ...state,
        cast: action.payload,
      };
    default:
      return state;
  }
};
