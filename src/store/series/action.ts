import { ISeries, UPDATE_SERIES, SeriesActionTypes } from "./types";


export function updateSeries(series: ISeries): SeriesActionTypes {
  return {
    type: UPDATE_SERIES,
    payload: series
  };
}
