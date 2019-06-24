import * as postActions from "../actions/postActions";

const initState = {
  isLoading: false,
  isError: false,
  posts: []
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case postActions.GET_MODES_BY_DATE_INITIAL_REQUESTED:
      return { ...state, isLoading: true };
    case postActions.GET_MODES_BY_DATE_INITIAL_DONE:
      return { ...state, isLoading: false, posts: action.payload };
    case postActions.GET_MODES_BY_DATE_INITIAL_FAILED:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default rootReducer;
