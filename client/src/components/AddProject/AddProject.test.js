import React from "react";
import { shallow } from "enzyme";

import AddProject from "./AddProject";
import { findByTestAttr } from "../../../utils";

const setup = () => {
  return shallow(<AddProject />);
};

describe("AddProject", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("AddProjects component renders without error", () => {
    const component = findByTestAttr(wrapper, "component-add-project");
    expect(component.exists()).toBe(true);
  });
  test("Add Project form renders", () => {
    const form = findByTestAttr(wrapper, "add-project-form");
    expect(form.exists()).toBe(true);
  });
});
