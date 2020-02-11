import React from "react";
import { shallow } from "enzyme";

import Login from "./Login";
import { findByTestAttr } from "../../../utils";

const setup = () => {
  return shallow(<Login />);
};

describe("Login", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("Login component renders without error", () => {
    const component = findByTestAttr(wrapper, "component-login");
    expect(component.exists()).toBe(true);
  });
  test("Should render input elements for email and password fields", () => {
    const emailInput = findByTestAttr(wrapper, "email-input");
    expect(emailInput.exists()).toBe(true);
    const passwordInput = findByTestAttr(wrapper, "password-input");
    expect(passwordInput.exists()).toBe(true);
  });
});

describe("state controlled login input fields", () => {
  let wrapper;
  let mockSetFormData;
  beforeEach(() => {
    mockSetFormData = jest.fn();
    React.useState = jest.fn(() => ["", mockSetFormData]);
    wrapper = setup();
  });
  test("state updates with value of email input upon change", () => {
    const emailInput = findByTestAttr(wrapper, "email-input");
    const emailInputMockEvent = {
      target: { name: "email", value: "test@app.com" }
    };

    emailInput.simulate("change", emailInputMockEvent);
    expect(mockSetFormData).toHaveBeenCalledWith({
      email: "test@app.com"
    });
  });
  test("state updates with value of of password input upon change", () => {
    const passwordInput = findByTestAttr(wrapper, "password-input");
    const passwordInputMockEvent = {
      target: { name: "password", value: "testing123" }
    };
    passwordInput.simulate("change", passwordInputMockEvent);
    expect(mockSetFormData).toHaveBeenCalledWith({
      password: "testing123"
    });
  });
});
