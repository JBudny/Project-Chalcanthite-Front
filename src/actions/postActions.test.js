import {
  getModesByDateInitialRequested,
  getModesByDateInitialDone,
  getModesByDateInitialFailed,
  getModesByDateInitial
} from "./postActions";

describe("action creator", () => {
  it("creates GET_MODES_BY_DATE_INITIAL_REQUESTED action", () => {
    expect(getModesByDateInitialRequested("test")).toMatchSnapshot();
  });

  it("creates GET_MODES_BY_DATE_INITIAL_DONE action", () => {
    expect(getModesByDateInitialDone("test")).toMatchSnapshot();
  });

  it("creates GET_MODES_BY_DATE_INITIAL_FAILED action", () => {
    expect(getModesByDateInitialFailed("test")).toMatchSnapshot();
  });

  it("creates getModesByDateInitial function", () => {
    expect(getModesByDateInitial("test")).toMatchSnapshot();
  });
});
