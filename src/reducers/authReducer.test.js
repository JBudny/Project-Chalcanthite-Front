import {
  setAuthDone,
  setAuthFailed,
  setAuthRequested,
  unsetAuthDone,
  unsetAuthFailed,
  unsetAuthRequested,
} from '../actions/authActions';
import { dummySetAuthDone } from '../utils/testUtils/dummyData/dummyAuthData';
import dummyInitialState from '../utils/testUtils/dummyData/dummyInitialState';
import { AUTH_ERROR } from '../utils/testUtils/dummyData/errors';
import authReducer from './authReducer';

describe('reducer', () => {
  const initialState = dummyInitialState.auth;

  it('should return the initial state', () => {
    expect(authReducer(undefined, { type: null })).toMatchSnapshot();
  });

  it('should handle SET_AUTH_REQUESTED action', () => {
    expect(authReducer(initialState, setAuthRequested())).toMatchSnapshot();
  });

  it('should handle SET_AUTH_DONE action', () => {
    const { name } = dummySetAuthDone;
    expect(authReducer(initialState, setAuthDone(name))).toMatchSnapshot();
  });

  it('should handle SET_AUTH_FAILED action', () => {
    expect(authReducer(initialState, setAuthFailed(AUTH_ERROR))).toMatchSnapshot();
  });

  it('should handle UNSET_AUTH_REQUESTED action', () => {
    expect(authReducer(initialState, unsetAuthRequested())).toMatchSnapshot();
  });

  it('should handle UNSET_AUTH_DONE action', () => {
    expect(authReducer(initialState, unsetAuthDone())).toMatchSnapshot();
  });

  it('should handle UNSET_AUTH_FAILED action', () => {
    expect(authReducer(initialState, unsetAuthFailed(AUTH_ERROR))).toMatchSnapshot();
  });
});
