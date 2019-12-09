// @flow

import { CLOSE_LOGIN_MODAL, OPEN_LOGIN_MODAL } from '../actions/loginModalActions';
import type { Action, LoginModalInitialState, LoginModalReducer } from '../types/redux.types';

const initState = {
  showModal: false,
};

const loginModalReducer = (
  state: LoginModalInitialState = initState,
  action: Action,
): LoginModalReducer => {
  switch (action.type) {
    case OPEN_LOGIN_MODAL:
      return { ...state, showModal: true };
    case CLOSE_LOGIN_MODAL:
      return { ...state, showModal: false };
    default:
      return state;
  }
};

export default loginModalReducer;
