import React from "react";
import Button from "./Button";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../../utils";

const defaultProps = { text: "Test", theme: "dark" };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  const component = shallow(<Button {...setupProps} />);
  return component;
};

describe("Button", () => {
  test("Component renders without error", () => {
    const wrapper = setup();
    const btn = findByTestAttr(wrapper, "btn");
    expect(btn.length).toBe(1);
  });
  test("Renders correct text when text prop is passed", () => {
    const wrapper = setup({ text: "Test Btn" });
    const btn = findByTestAttr(wrapper, "btn");
    expect(btn.text()).toBe("Test Btn");
  });
  test("Does not throw error with expected props", () => {
    const expectedProps = { text: "Login", theme: "light" };
    checkProps(Button, expectedProps);
  });
});
