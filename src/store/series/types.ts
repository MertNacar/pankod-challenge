// src/store/chat/types.ts
export const UPDATE_SERIES = "UPDATE_SERIES";

export interface ISeries {
  type: typeof UPDATE_SERIES;
  payload: number;
}

interface IUpdateSeriesAction {
  type: typeof UPDATE_SERIES;
  payload: ISeries;
}

export type SeriesActionTypes = IUpdateSeriesAction;
