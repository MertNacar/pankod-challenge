import { Movies, UPDATE_MOVIES, MoviesActionTypes } from "./types";


export function updateMovies(movies: Movies): MoviesActionTypes {
  return {
    type: UPDATE_MOVIES,
    payload: movies
  };
}
