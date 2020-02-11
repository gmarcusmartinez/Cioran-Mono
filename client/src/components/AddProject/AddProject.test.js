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
  test("Input element for project name renders", () => {
    const projectName = findByTestAttr(wrapper, "project-name-input");
    expect(projectName.exists()).toBe(true);
  });
});

describe("state controlled addProject input field", () => {
  let wrapper;
  let mockSetFormData;
  beforeEach(() => {
    mockSetFormData = jest.fn();
    React.useState = jest.fn(() => ["", mockSetFormData]);
    wrapper = setup();
  });
  test("state updates with value of projectName input on change", () => {
    const projectNameInput = findByTestAttr(wrapper, "project-name-input");
    const projectNameInputMockEvent = {
      target: { name: "projectName", value: "test project" }
    };
    projectNameInput.simulate("change", projectNameInputMockEvent);

    expect(mockSetFormData).toHaveBeenCalledWith({
      projectName: "test project"
    });
  });
});
