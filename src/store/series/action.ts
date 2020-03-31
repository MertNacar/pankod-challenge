import { Series, UPDATE_SERIES, SeriesActionTypes } from "./types";


export function updateCart(series: Series): SeriesActionTypes {
  return {
    type: UPDATE_SERIES,
    payload: series
  };
}
