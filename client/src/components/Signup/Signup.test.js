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
