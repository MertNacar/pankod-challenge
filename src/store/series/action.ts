import { UPDATE_SERIES, SeriesActionTypes } from "./types";
import { ISeriesState } from "../../screens/Series/types";

export function updateSeries(series: ISeriesState): SeriesActionTypes {
  return {
    type: UPDATE_SERIES,
    payload: series
  };
}
