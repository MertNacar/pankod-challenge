import React from "react";
import { shallow } from "enzyme";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  const wrapper = shallow(<Footer />);

  it("is exists", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("return Footer", () => {
    expect(wrapper).toMatchSnapshot("Footer");
  });
});
