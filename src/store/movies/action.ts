import { UPDATE_MOVIES, MoviesActionTypes } from "./types";
import { IMoviesState } from "../../screens/Movies/types";

export function updateMovies(movies: IMoviesState): MoviesActionTypes {
  return {
    type: UPDATE_MOVIES,
    payload: movies
  };
}
