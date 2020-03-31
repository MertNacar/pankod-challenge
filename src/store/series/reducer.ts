import { SeriesState, SeriesActionTypes, UPDATE_SERIES } from "./types";

const initialState: SeriesState = {
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
