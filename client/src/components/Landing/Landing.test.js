import React from "react";
import Landing from "./Landing";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../utils";

const setup = (props = {}) => {
  const component = shallow(<Landing {...props} />);
  return component;
};

describe("Landing", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  test("Component renders without error", () => {
    const wrapper = findByTestAttr(component, "app-landing");
    expect(wrapper.length).toBe(1);
  });

  test("should contain an auth section and display section", () => {
    const authDiv = findByTestAttr(component, "app-auth-section");
    expect(authDiv.length).toBe(1);
    const display = findByTestAttr(component, "app-landing-display");
    expect(display.length).toBe(1);
  });
});
