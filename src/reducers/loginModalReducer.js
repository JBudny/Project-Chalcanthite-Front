// @flow

import { CLOSE_LOGIN_MODAL, OPEN_LOGIN_MODAL } from '../actions/loginModalActions';
import type { Action, LoginModalState } from '../types/redux.types';

const initState = {
  showModal: false,
};

const loginModalReducer = (state: LoginModalState = initState, action: Action): LoginModalState => {
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
