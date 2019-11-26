// @flow

import type { SetAuth, UnsetAuth } from '../types/redux.types';

export const SET_AUTH = 'SET_AUTH';

export const UNSET_AUTH = 'UNSET_AUTH';

export const setAuth = (): SetAuth => ({
  type: 'SET_AUTH',
});

export const unsetAuth = (): UnsetAuth => ({
  type: 'UNSET_AUTH',
});
