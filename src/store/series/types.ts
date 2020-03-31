// src/store/chat/types.ts
export const UPDATE_SERIES = "UPDATE_SERIES";

export interface Series {
  type: typeof UPDATE_SERIES;
  payload: number;
}

interface UpdateSeriesAction {
  type: typeof UPDATE_SERIES;
  payload: Series;
}

export interface SeriesState {
  series: [];
}

export type SeriesActionTypes = UpdateSeriesAction; /* | DeleteMessageAction*/
