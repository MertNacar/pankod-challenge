// src/store/chat/types.ts
export const UPDATE_MOVIES = "UPDATE_MOVIES";

export interface IMovies {
  type: typeof UPDATE_MOVIES;
  payload: number;
}

interface IUpdateMoviesAction {
  type: typeof UPDATE_MOVIES;
  payload: IMovies;
}


export type MoviesActionTypes = IUpdateMoviesAction; 
