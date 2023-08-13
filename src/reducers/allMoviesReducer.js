import { SET_All_MOVIES, SET_SEARCH_MOVIES } from '../actions/actionAllMovies';

const initialState = {
  allMovies: [],
  searchMovies: [],
};

export const allMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_All_MOVIES:
      return {
        ...state,
        allMovies: action.payload,
      };
    case SET_SEARCH_MOVIES:
      return {
        ...state,
        searchMovies: action.payload,
      };

    default:
      return state;
  }
};
