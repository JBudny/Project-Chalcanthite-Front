// @flow

import type { Dispatch } from 'redux-mock-store';

import type {
  Action,
  GetModesByDateInitialDone,
  GetModesByDateInitialFailed,
  GetModesByDateInitialRequested,
  Posts,
} from '../types/redux.types';

export const GET_MODES_BY_DATE_INITIAL_REQUESTED = 'GET_MODES_BY_DATE_INITIAL_REQUESTED';

export const GET_MODES_BY_DATE_INITIAL_DONE = 'GET_MODES_BY_DATE_INITIAL_DONE';

export const GET_MODES_BY_DATE_INITIAL_FAILED = 'GET_MODES_BY_DATE_INITIAL_FAILED';

export const getModesByDateInitialRequested = (): GetModesByDateInitialRequested => ({
  type: 'GET_MODES_BY_DATE_INITIAL_REQUESTED',
});

export const getModesByDateInitialDone = (posts: Posts): GetModesByDateInitialDone => ({
  type: 'GET_MODES_BY_DATE_INITIAL_DONE',
  payload: posts,
});

export const getModesByDateInitialFailed = (error: string): GetModesByDateInitialFailed => ({
  type: 'GET_MODES_BY_DATE_INITIAL_FAILED',
  payload: error,
});

export const getModesByDateInitial = (quantity: number) => (dispatch: Dispatch<Action>) => {
  dispatch(getModesByDateInitialRequested());
  if (!process.env.REACT_APP_API_URL) throw new Error('REACT_APP_API_URL missing');
  const { REACT_APP_API_URL } = process.env;
  return fetch(`${REACT_APP_API_URL}/mode/top/${quantity}`)
    .then(posts => posts.json())
    .then(posts => dispatch(getModesByDateInitialDone(posts)))
    .catch(error => dispatch(getModesByDateInitialFailed(`ERROR: ${error}`)));
};
