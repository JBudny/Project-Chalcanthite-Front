import {
  GET_MODES_BY_DATE_INITIAL_REQUESTED,
  GET_MODES_BY_DATE_INITIAL_DONE,
  GET_MODES_BY_DATE_INITIAL_FAILED
} from "../actions/postActions";

const initState = {
  isLoading: false,
  isError: false,
  posts: []
};

const getModesByDateInitial = (state = initState, action) => {
  switch (action.type) {
    case GET_MODES_BY_DATE_INITIAL_REQUESTED:
      return { ...state, isLoading: true };
    case GET_MODES_BY_DATE_INITIAL_DONE:
      return { ...state, isLoading: false, posts: action.payload };
    case GET_MODES_BY_DATE_INITIAL_FAILED:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default getModesByDateInitial;
