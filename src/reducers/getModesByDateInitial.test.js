import reducer from "./getModesByDateInitial";
import {
  getModesByDateInitialRequested,
  getModesByDateInitialDone,
  getModesByDateInitialFailed
} from "../actions/postActions";

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it("should handle GET_MODES_BY_DATE_INITIAL_REQUESTED", () => {
    expect(reducer([], getModesByDateInitialRequested())).toMatchSnapshot();
  });

  it("should handle GET_MODES_BY_DATE_INITIAL_DONE", () => {
    expect(reducer([], getModesByDateInitialDone())).toMatchSnapshot();
  });

  it("should handle GET_MODES_BY_DATE_INITIAL_FAILED", () => {
    expect(reducer([], getModesByDateInitialFailed())).toMatchSnapshot();
  });
});
