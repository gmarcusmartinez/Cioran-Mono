import React from "react";
import { shallow } from "enzyme";

import Sidebar from "./Sidebar";
import { findByTestAttr, checkProps } from "../../../utils";

const defaultProps = {
  links: [{ text: "projects", to: "/projects", icon: "fas fa-test" }]
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Sidebar {...setupProps} />);
};

describe("Sidebar", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("Component renders without error", () => {
    const component = findByTestAttr(wrapper, "component-sidebar");
    expect(component.exists()).toBe(true);
  });
  test("renders sidebar title", () => {
    const title = findByTestAttr(wrapper, "sidebar-title");
    expect(title.exists()).toBe(true);
  });
  test("does not throw warning with expected props", () => {
    checkProps(Sidebar, defaultProps);
  });
});
