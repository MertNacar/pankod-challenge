import { UPDATE_MOVIES, MoviesActionTypes } from "./types";
import { IMoviesState } from "../../screens/Movies/types";

//action creators for movies

export function updateMovies(movies: IMoviesState): MoviesActionTypes {
  return {
    type: UPDATE_MOVIES,
    payload: movies
  };
}
