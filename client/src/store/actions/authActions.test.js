import { SIGNUP } from "./types";
import { signup } from "./authActions";

describe("Signup", () => {
  test("returns an action with type `SIGNUP`", () => {
    const action = signup();
    expect(action).toEqual({ type: SIGNUP });
  });
});
