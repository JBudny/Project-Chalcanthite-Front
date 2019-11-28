// @flow

import { closeLoginModal, openLoginModal } from '../actions/loginModalActions';
import loginModalReducer from './loginModalReducer';

const initState = {
  showModal: false,
};

describe('loginModalReducer', () => {
  it('should return the initial state', () => {
    expect(loginModalReducer(undefined, { type: null })).toMatchSnapshot();
  });

  it('should handle OPEN_LOGIN_MODAL action', () => {
    expect(loginModalReducer(initState, openLoginModal())).toMatchSnapshot();
  });

  it('should handle CLOSE_LOGIN_MODAL action', () => {
    expect(loginModalReducer(initState, closeLoginModal())).toMatchSnapshot();
  });
});
