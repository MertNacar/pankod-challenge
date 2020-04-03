import React from "react";
import { Provider } from "react-redux";
import configureStore from "../store/store";
import { shallow } from "enzyme";
import MoviesScreen from "../screens/Movies/MoviesScreen";

let store = configureStore();
describe("MoviesScreen", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <MoviesScreen />
    </Provider>
  );

  it("is exists", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
