import { MoviesState, MoviesActionTypes, UPDATE_MOVIES } from "./types";

const initialState: MoviesState = {
  movies: []
};

export const seriesReducer = (
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
