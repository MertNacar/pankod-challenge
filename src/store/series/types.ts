import { ISeriesState } from "../../screens/Series/types";
export const UPDATE_SERIES = "UPDATE_SERIES";

interface IUpdateSeriesAction {
  type: typeof UPDATE_SERIES;
  payload: ISeriesState;
}

export type SeriesActionTypes = IUpdateSeriesAction;
