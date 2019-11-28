// @flow

import { SET_AUTH, UNSET_AUTH } from '../actions/authActions';
import type { Action, AuthState } from '../types/redux.types';

const initState = {
  auth: false,
};

const authReducer = (state: AuthState = initState, action: Action): AuthState => {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, auth: true };
    case UNSET_AUTH:
      return { ...state, auth: false };
    default:
      return state;
  }
};

export default authReducer;
