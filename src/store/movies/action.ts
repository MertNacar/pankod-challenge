import { IMovies, UPDATE_MOVIES, MoviesActionTypes } from "./types";


export function updateMovies(movies: IMovies): MoviesActionTypes {
  return {
    type: UPDATE_MOVIES,
    payload: movies
  };
}
