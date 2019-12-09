// @flow

import type { Dispatch } from 'redux-mock-store';

import type {
  Action,
  SetAuthDone,
  SetAuthFailed,
  SetAuthRequested,
  UnsetAuthDone,
  UnsetAuthFailed,
  UnsetAuthRequested,
} from '../types/redux.types';
import { REACT_APP_AUTH_LOGOUT, REACT_APP_AUTH_ME } from '../utils/env/typedEnv';

export const SET_AUTH_REQUESTED = 'SET_AUTH_REQUESTED';
export const SET_AUTH_DONE = 'SET_AUTH_DONE';
export const SET_AUTH_FAILED = 'SET_AUTH_FAILED';
export const UNSET_AUTH_REQUESTED = 'UNSET_AUTH_REQUESTED';
export const UNSET_AUTH_DONE = 'UNSET_AUTH_DONE';
export const UNSET_AUTH_FAILED = 'UNSET_AUTH_FAILED';

export const setAuthRequested = (): SetAuthRequested => ({
  type: 'SET_AUTH_REQUESTED',
});

export const setAuthDone = (userName: string): SetAuthDone => ({
  type: 'SET_AUTH_DONE',
  payload: userName,
});

export const setAuthFailed = (error: string): SetAuthFailed => ({
  type: 'SET_AUTH_FAILED',
  payload: error,
});

export const unsetAuthRequested = (): UnsetAuthRequested => ({
  type: 'UNSET_AUTH_REQUESTED',
});

export const unsetAuthDone = (): UnsetAuthDone => ({
  type: 'UNSET_AUTH_DONE',
});

export const unsetAuthFailed = (error: string): UnsetAuthFailed => ({
  type: 'UNSET_AUTH_FAILED',
  payload: error,
});

export const unsetAuth = () => (dispatch: Dispatch<Action>) => {
  dispatch(unsetAuthRequested());
  return fetch(REACT_APP_AUTH_LOGOUT, { credentials: 'include', method: 'POST' })
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        dispatch(unsetAuthFailed(res.error));
      } else {
        dispatch(unsetAuthDone());
      }
    })
    .catch(error => dispatch(unsetAuthFailed(error)));
};

export const setAuth = () => (dispatch: Dispatch<Action>) => {
  dispatch(setAuthRequested());
  return fetch(REACT_APP_AUTH_ME, {
    method: 'GET',
    credentials: 'include',
  })
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        dispatch(setAuthFailed(res.error));
      } else {
        const { name } = res;
        dispatch(setAuthDone(name));
      }
    })
    .catch(error => {
      dispatch(setAuthFailed(error));
    });
};
