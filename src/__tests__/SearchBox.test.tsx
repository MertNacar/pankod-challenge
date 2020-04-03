import React from "react";
import { shallow } from "enzyme";
import SearchBox from "../components/SearchBox";

describe("SearchBox Component", () => {
  const wrapper = shallow(
    <SearchBox
      searchPlaceholder="Search"
      searchValue="asd"
      searchChange={() => jest.fn()}
      searchClick={() => jest.fn()}
    />
  );

  it("is exists", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("getting input", () => {
    expect(wrapper.find("input").props().value).toEqual("asd");
  });
});
