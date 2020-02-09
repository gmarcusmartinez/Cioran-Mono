import React from "react";
import { shallow } from "enzyme";

import Projects from "./Projects";
import { findByTestAttr } from "../../../utils";

const setup = () => {
  return shallow(<Projects />);
};

describe("Projects", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("Projects component renders without error", () => {
    const component = findByTestAttr(wrapper, "component-projects");
    expect(component.exists()).toBe(true);
  });
});
