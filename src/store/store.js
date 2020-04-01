import { createStore, combineReducers } from 'redux'
import { seriesReducer } from "./series/reducer";
import { moviesReducer } from "./movies/reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  series: seriesReducer
});

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore;
