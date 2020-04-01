import { MoviesActionTypes, UPDATE_MOVIES } from "./types";
import { IMoviesState } from "../../screens/Movies/types";

const initialState: IMoviesState = {
  total: 0,
  entries: []
};

export const moviesReducer = (
  state = initialState,
  action: MoviesActionTypes
) => {
  switch (action.type) {
    case UPDATE_MOVIES:
      return state;
    default:
      return state;
  }
};
