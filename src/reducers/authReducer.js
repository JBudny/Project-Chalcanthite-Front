// @flow

import { SET_AUTH, UNSET_AUTH } from '../actions/authActions';
import type { Action, authState } from '../types/redux.types';

const initState = {
  auth: false,
};

const authReducer = (state: authState = initState, action: Action): authState => {
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
