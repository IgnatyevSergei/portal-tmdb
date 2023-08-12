import { applyMiddleware, createStore } from "redux";
import { combineReducerStore } from "./reducers";
import thunk from "redux-thunk";

const store = createStore(combineReducerStore, applyMiddleware(thunk))

export default store











//   <img
//     className='img'
//     src='https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg
// '></img>;

