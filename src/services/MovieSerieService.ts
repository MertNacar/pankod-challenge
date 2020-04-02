import { get } from "../utils/httpHelper";

interface AllData {
  values: Array<Object>;
  err: boolean;
}

//get initial filtered data
export async function GetAllData(
  endpoint: string,
  limit: number,
  programType: string
): Promise<AllData> {
  try {
    let res = await get(endpoint);
    if (!res.err) {
      let newTotal: number = 0;
      let filteredValues = res.data.entries
        .filter((item: any) => {
          if (
            newTotal < limit &&
            item.releaseYear >= 2010 &&
            item.programType === programType
          ) {
            newTotal++;
            return item;
          }
        })
        .sort((a: any, b: any) => {
          return a.title - b.title;
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
): Array<Object> {
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
): Array<Object> {
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
): Array<Object> {
  return entries.sort((prev: any, next: any) => {
    return direction === "ascending"
      ? prev[value].localeCompare(next[value])
      : next[value].localeCompare(prev[value]);
  });
}
