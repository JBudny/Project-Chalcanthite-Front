import expect from "expect";
import reducer from "../reducers/getModesByDateInitial";
import * as actions from "../actions/postActions";

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({ isError: false, isLoading: false, posts: [] });
  });

  it("should handle GET_MODES_BY_DATE_INITIAL_REQUESTED", () => {
    const startAction = {
      type: actions.GET_MODES_BY_DATE_INITIAL_REQUESTED
    };
    expect(reducer({}, startAction)).toEqual({ isLoading: true });
  });

  it("should handle GET_MODES_BY_DATE_INITIAL_DONE", () => {
    const startAction = {
      type: actions.GET_MODES_BY_DATE_INITIAL_DONE
    };
    expect(reducer({}, startAction)).toEqual({ isLoading: false });
  });

  it("should handle GET_MODES_BY_DATE_INITIAL_FAILED", () => {
    const startAction = {
      type: actions.GET_MODES_BY_DATE_INITIAL_FAILED
    };
    expect(reducer({}, startAction)).toEqual({ isLoading: false, isError: true });
  });
});
