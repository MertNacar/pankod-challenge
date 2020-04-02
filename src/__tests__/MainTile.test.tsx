import React from "react";
import { shallow } from "enzyme";
import MainTile from "../components/MainTile";

it("should match titles as Wolf Creek", () => {
  const wrapper = shallow(
    <MainTile
      route="/series"
      image="https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg"
      alt="Wolf Creek"
      title="Wolf Creek"
    />
  );

  const title = wrapper.find(".text-light").text();
  expect(title).toBe("Wolf Creek");
});
