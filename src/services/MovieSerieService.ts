import { get } from "../utils/httpHelper";
import {
  IMovieSerieAllData,
  IResponseMovieSerie,
  IMovieSerieObject,
} from "./types";

//get initial filtered data
export async function GetAllData(
  endpoint: string,
  limit: number,
  programType: string
): Promise<IMovieSerieAllData> {
  try {
    let res: IResponseMovieSerie = await get(endpoint);
    if (!res.err) {
      let newTotal: number = 0;
      let filteredValues = res.data.entries
        .filter((item: IMovieSerieObject) => {
          if (
            newTotal < limit &&
            item.releaseYear >= 2010 &&
            item.programType === programType
          ) {
            newTotal++;
            return item;
          }
        })
        .sort((a: IMovieSerieObject, b: IMovieSerieObject) => {
          return a.title.localeCompare(b.title);
        });
      return { values: filteredValues, err: false };
    } else throw new Error();
  } catch {
    return { values: [], err: true };
  }
}

export function GetSearchedData(
  entries: Array<Object>,
  searchValue: string
): Array<any> {
  return entries.filter((item: any) => {
    return item.title.toLowerCase().search(searchValue.toLowerCase()) !== -1
      ? true
      : false;
  });
}

export function GetOrderedNumberData(
  entries: Array<Object>,
  value: string,
  direction: string
): Array<any> {
  return entries.sort((prev: any, next: any) => {
    return direction === "ascending"
      ? prev[value] - next[value]
      : next[value] - prev[value];
  });
}

export function GetOrderedTextData(
  entries: Array<Object>,
  value: string,
  direction: string
): Array<any> {
  return entries.sort((prev: any, next: any) => {
    return direction === "ascending"
      ? prev[value].localeCompare(next[value])
      : next[value].localeCompare(prev[value]);
  });
}
