import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../utils";

const setup = (props = {}) => {
  const component = shallow(<Footer {...props} />);
  return component;
};

describe("Footer", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  test("Component renders without error", () => {
    const footer = findByTestAttr(component, "app-footer");
    expect(footer.length).toBe(1);
  });

  test("Contains copyright info", () => {
    const copyright = findByTestAttr(component, "app-footer-copyright");
    expect(copyright.length).toBe(1);
  });
});
