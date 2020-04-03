import React from "react";
import { Provider } from "react-redux";
import configureStore from "../store/store";
import { shallow } from "enzyme";
import SeriesScreen from "../screens/Series/SeriesScreen";

let store = configureStore();

describe("SeriesScreen", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <SeriesScreen />
    </Provider>
  );

  it("is exists", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
