import React from "react";
import { shallow } from "enzyme";

import Signup from "./Signup";
import { findByTestAttr } from "../../../utils";

const setup = () => {
  return shallow(<Signup />);
};

describe("Signup", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("Signup component renders without error", () => {
    const component = findByTestAttr(wrapper, "component-signup");
    expect(component.exists()).toBe(true);
  });
  test("Should render input elements for email, password, and confirm password fields", () => {
    const emailInput = findByTestAttr(wrapper, "email-input");
    expect(emailInput.exists()).toBe(true);
    const passwordInput = findByTestAttr(wrapper, "password-input");
    expect(passwordInput.exists()).toBe(true);
    const confirmPasswordInput = findByTestAttr(
      wrapper,
      "confirm-password-input"
    );
    expect(confirmPasswordInput.exists()).toBe(true);
  });
});

describe("state controlled signup input fields", () => {
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
  test("state updates with value of of confirm password input upon change", () => {
    const confirmPassword = findByTestAttr(wrapper, "confirm-password-input");
    const confirmPasswordMockEvent = {
      target: { name: "confirmPassword", value: "testing123" }
    };
    confirmPassword.simulate("change", confirmPasswordMockEvent);
    expect(mockSetFormData).toHaveBeenCalledWith({
      confirmPassword: "testing123"
    });
  });
});
