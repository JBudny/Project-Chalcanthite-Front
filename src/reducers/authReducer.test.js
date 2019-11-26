// @flow

import { setAuth, unsetAuth } from '../actions/authActions';
import authReducer from './authReducer';

const initState = {
  auth: false,
};

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, { type: null })).toMatchSnapshot();
  });

  it('should handle SET_AUTH action', () => {
    expect(authReducer(initState, setAuth())).toMatchSnapshot();
  });

  it('should handle UNSET_AUTH action', () => {
    expect(authReducer(initState, unsetAuth())).toMatchSnapshot();
  });
});
