import { SeriesActionTypes, UPDATE_SERIES } from "./types";
import { ISeriesState } from "../../screens/Series/types";

const initialState: ISeriesState = {
  total: 0,
  entries: []
};

export const seriesReducer = (
  state = initialState,
  action: SeriesActionTypes
) => {
  switch (action.type) {
    case UPDATE_SERIES:
      let newState = Object.assign({}, state, action.payload);
      return newState;
    default:
      return state;
  }
};
