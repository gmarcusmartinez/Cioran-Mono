import React from "react";
import Content from "./Content";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../utils";

const setup = () => {
  const component = shallow(<Content />);
  return component;
};

describe("Content", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  test("Component renders without error", () => {
    const wrapper = findByTestAttr(component, "dash-content");
    expect(wrapper.exists()).toBe(true);
  });
});
