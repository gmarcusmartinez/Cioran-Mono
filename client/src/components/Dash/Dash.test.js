import React from "react";
import { shallow } from "enzyme";

import Dash from "./Dash";
import { findByTestAttr } from "../../../utils";

const setup = () => {
  return shallow(<Dash />);
};

describe("Dash", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("Component renders without error", () => {
    const component = findByTestAttr(wrapper, "component-dashboard");
    expect(component.exists()).toBe(true);
  });
  test("renders section for sidebar navigation", () => {
    const sidebarSection = findByTestAttr(wrapper, "sidebar-section");
    expect(sidebarSection.exists()).toBe(true);
  });
  test("renders section for content", () => {
    const contentSection = findByTestAttr(wrapper, "content-section");
    expect(contentSection.exists()).toBe(true);
  });
});
