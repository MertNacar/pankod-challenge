import React from "react";
import { shallow } from "enzyme";
import Header from "../components/Header";

describe("Header Component", () => {
  const wrapper = shallow(<Header />);

  it("is exists", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("return Header", () => {
    expect(wrapper).toMatchSnapshot("Header");
  });

});
