import { IMoviesState, MoviesActionTypes, UPDATE_MOVIES } from "./types";

const initialState: IMoviesState = {
  movies: []
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
