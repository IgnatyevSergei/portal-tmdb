import { SET_All_MOVIES } from '../actions/actionAllMovies';

const initialState = {
  allMovies: [],
};

export const allMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_All_MOVIES:
      return {
        ...state,
        allMovies: action.payload,
      };

    default:
      return state;
  }
};
