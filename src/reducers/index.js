import { combineReducers } from 'redux';
import { topMoviesReducer } from './topMoviesReducer';
import { allMoviesReducer } from './allMoviesReducer';
import { actorsReducer } from './actorsReducer';
import { movieInfoReducer } from './movieInfoReducer';

export const combineReducerStore = combineReducers({
  topMoviesReducer,
  allMoviesReducer,
  actorsReducer,
  movieInfoReducer,
});
