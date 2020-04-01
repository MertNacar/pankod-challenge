import { ISeriesState, SeriesActionTypes, UPDATE_SERIES } from "./types";

const initialState: ISeriesState = {
  series: []
};

export const seriesReducer = (
  state = initialState,
  action: SeriesActionTypes
) => {
  switch (action.type) {
    case UPDATE_SERIES:
      return state;
    default:
      return state;
  }
};
