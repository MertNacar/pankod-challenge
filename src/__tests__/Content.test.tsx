import React from "react";
import { shallow } from "enzyme";
import Content from "../components/Content";
import mockData from "../../public/feed/test/mock_test.json";

describe("Content Component", () => {
  const wrapper = shallow(
    <Content
      subTitle="Popular Movies"
      entries={mockData}
      dropdownEntries={[
        "Year ascending",
        "Year descending",
        "Title ascending",
        "Title descending"
      ]}
      searchValue="Mocking"
      searchChange={() => jest.fn()}
      searchClick={() => jest.fn()}
      searchPlaceholder="Search..."
      sendDropdownValue={() => jest.fn()}
      dropdownValue="Title Ascending"
    />
  );

  it("is exists", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("return five items", () => {
    expect(wrapper).toMatchSnapshot("Content");
  });
});
