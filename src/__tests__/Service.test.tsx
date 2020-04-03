import { GetSearchedData } from "../services/MovieSerieService";
import mockData from "../../public/feed/test/mock_test.json";
import searchData from "../../public/feed/test/search_test.json";

describe("MovieSerie service", () => {
  const searchedData = GetSearchedData(mockData, "Wolf");
  it("return 1 searched data Wolf Creek", () => {
    expect(searchedData[0].title).toBe(searchData[0].title);
  });
});
