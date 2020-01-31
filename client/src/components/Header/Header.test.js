import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../utils";

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  test("Component renders without error", () => {
    const wrapper = findByTestAttr(component, "app-header");
    expect(wrapper.length).toBe(1);
  });
  test("Logo renders", () => {
    const logo = findByTestAttr(component, "app-title");
    expect(logo.length).toBe(1);
  });
  test("Auth-btns div renders", () => {
    const authBtns = findByTestAttr(component, "auth-btns");
    expect(authBtns.length).toBe(1);
  });
});
