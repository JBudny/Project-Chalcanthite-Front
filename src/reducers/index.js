// @flow
import { combineReducers } from 'redux';

import type { Action } from '../types/redux.types';
import auth from './authReducer';
import getModesByDateInitial from './getModesByDateInitial';

export default combineReducers<Object, Action>({
  posts: getModesByDateInitial,
  auth,
});
