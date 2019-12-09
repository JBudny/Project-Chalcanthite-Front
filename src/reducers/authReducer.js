// @flow

import {
  SET_AUTH_DONE,
  SET_AUTH_FAILED,
  SET_AUTH_REQUESTED,
  UNSET_AUTH_DONE,
  UNSET_AUTH_FAILED,
  UNSET_AUTH_REQUESTED,
} from '../actions/authActions';
import type { Action, AuthInitialState, AuthReducer } from '../types/redux.types';

const initState = {
  isLoading: false,
  isError: false,
  auth: false,
  error: {},
  userName: 'anonymous',
};

const authReducer = (state: AuthInitialState = initState, action: Action): AuthReducer => {
  switch (action.type) {
    case SET_AUTH_REQUESTED:
      return { ...state, isLoading: true };
    case SET_AUTH_DONE: {
      return {
        ...state,
        auth: true,
        userName: action.payload,
      };
    }
    case SET_AUTH_FAILED: {
      return { ...state, auth: false, isError: true, error: action.payload };
    }
    case UNSET_AUTH_REQUESTED:
      return { ...state, isLoading: true };
    case UNSET_AUTH_DONE:
      return { ...state, auth: false };
    case UNSET_AUTH_FAILED:
      return { ...state, auth: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
