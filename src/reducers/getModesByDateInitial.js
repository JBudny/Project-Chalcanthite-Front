// @flow

import {
  GET_MODES_BY_DATE_INITIAL_DONE,
  GET_MODES_BY_DATE_INITIAL_FAILED,
  GET_MODES_BY_DATE_INITIAL_REQUESTED,
} from '../actions/postActions';
import type { Action, postsState } from '../types/redux.types';

const initState = {
  isLoading: false,
  isError: false,
  posts: [],
};

const getModesByDateInitial = (state: postsState = initState, action: Action): postsState => {
  switch (action.type) {
    case GET_MODES_BY_DATE_INITIAL_REQUESTED:
      return { ...state, isLoading: true };
    case GET_MODES_BY_DATE_INITIAL_DONE:
      return { ...state, isLoading: false, posts: action.payload };
    case GET_MODES_BY_DATE_INITIAL_FAILED:
      return { ...state, isLoading: false, isError: true, error: action.payload };
    default:
      return state;
  }
};

export default getModesByDateInitial;
