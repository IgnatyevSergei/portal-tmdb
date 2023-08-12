import { SET_TOP_MOVIES } from "../actions/actionTopMovie";

const initialState = {
  topMovies: [],
  isLoading:null
};

export const topMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOP_MOVIES:
        return {
          ...state,
          topMovies: action.payload
        };
    default:
      return state
      
  }
};
