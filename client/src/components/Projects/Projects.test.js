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
  test("Projects component renders without error", () => {
    const createProjectBtn = findByTestAttr(wrapper, "add-project-btn");
    expect(createProjectBtn.exists()).toBe(true);
  });
});

describe("state controlled displayAddProject", () => {
  test("state updates on display-add-project btn click", () => {
    const mockSetDisplayAddProject = jest.fn();
    React.useState = jest.fn(() => ["", mockSetDisplayAddProject]);

    const wrapper = setup();
    const addProjectBtn = findByTestAttr(wrapper, "add-project-btn");

    addProjectBtn.simulate("click");
    expect(mockSetDisplayAddProject).toHaveBeenCalled();
  });
});
