import { IMoviesState } from "../../screens/Movies/types";
export const UPDATE_MOVIES = "UPDATE_MOVIES";

interface IUpdateMoviesAction {
  type: typeof UPDATE_MOVIES;
  payload: IMoviesState;
}

export type MoviesActionTypes = IUpdateMoviesAction;
