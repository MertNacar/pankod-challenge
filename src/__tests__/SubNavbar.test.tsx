import React from "react";
import { shallow } from "enzyme";
import SubNavbar from "../components/SubNavbar";

describe("SubNavbar Component", () => {
  const wrapper = shallow(<SubNavbar title="Popular Titles" />);

  it("is exists", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("return SubNavbar with Popular Titles field", () => {
    expect(wrapper).toMatchSnapshot("SubNavbar");
  });
});
