// src/store/chat/types.ts
export const UPDATE_MOVIES = "UPDATE_MOVIES";

export interface Movies {
  type: typeof UPDATE_MOVIES;
  payload: number;
}

interface UpdateMoviesAction {
  type: typeof UPDATE_MOVIES;
  payload: Movies;
}

export interface MoviesState {
  movies: [];
}

export type MoviesActionTypes = UpdateMoviesAction; /* | DeleteMessageAction*/
