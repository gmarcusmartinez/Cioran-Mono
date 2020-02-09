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
});
