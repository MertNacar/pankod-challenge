import { createStore, combineReducers } from "redux";
import { seriesReducer } from "./series/reducer";
import { moviesReducer } from "./movies/reducer";
import { ISeriesState } from "../screens/Series/types";
import { IMoviesState } from "../screens/Movies/types";
import { IMovies } from "./movies/types";
import { ISeries } from "./series/types";

export interface IReduxState {
  movies?: IMoviesState;
  series?: ISeriesState;
}

export interface IStateProps {
  movies?: IMoviesState;
  series?: ISeriesState;
}

export interface IDispatchProps {
  updateMovies?: (movies: IMovies) => void;
  updateSeries?: (series: ISeries) => void;
}

const rootReducer = combineReducers({
  movies: moviesReducer,
  series: seriesReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
