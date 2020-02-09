import moxios from "moxios";

describe("getProjects action creator", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("Returns array of projects", () => {});
});
