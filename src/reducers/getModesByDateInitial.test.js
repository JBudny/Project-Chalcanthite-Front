import reducer from "./getModesByDateInitial";
import * as actions from "../actions/postActions";

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it("should handle GET_MODES_BY_DATE_INITIAL_REQUESTED", () => {
    expect(reducer([], actions.getModesByDateInitialRequested())).toMatchSnapshot();
  });

  it("should handle GET_MODES_BY_DATE_INITIAL_DONE", () => {
    expect(reducer([], actions.getModesByDateInitialDone())).toMatchSnapshot();
  });

  it("should handle GET_MODES_BY_DATE_INITIAL_FAILED", () => {
    expect(reducer([], actions.getModesByDateInitialFailed())).toMatchSnapshot();
  });
});
