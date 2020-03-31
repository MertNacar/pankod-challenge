import { createStore, combineReducers } from 'redux'
import { userReducer } from "./series/reducer";
import { cafeReducer } from "./movies/reducer";

const rootReducer = combineReducers({
  movies: userReducer,
  series: cafeReducer,
});

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore;
