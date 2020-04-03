import React from "react";
import { shallow } from "enzyme";
import SeriesMoviesList from "../components/SeriesMoviesList";
import mockData from '../../public/feed/test/mock_test.json'

describe("SeriesMoviesList Component", () => {
  const wrapper = shallow(
    <SeriesMoviesList values={mockData} classList="pr-3 pt-3 pb-3" />
  );

  it("is exists", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("return five items", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("return an empty array", () => {
    const wrapperEmpty = shallow(
      <SeriesMoviesList values={[]} classList="pr-3 pt-3 pb-3" />
    );

    expect(wrapperEmpty).toMatchSnapshot("SeriesMoviesList");
  });
});

