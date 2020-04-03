import React from "react";
import { shallow } from "enzyme";
import SeriesMoviesCard from "../components/SeriesMoviesCard";
import mockData from "../../public/feed/test/mock_test.json";

describe("SeriesMoviesCard Component", () => {
  const wrapper = shallow(
    <SeriesMoviesCard
      alt={mockData[0].title}
      image={mockData[0].images["Poster Art"].url}
      title={mockData[0].title}
    />
  );

  it("is exists", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("return one card item filled with first item of mock data", () => {
    expect(wrapper).toMatchSnapshot("SeriesMoviesCard");
  });
});
