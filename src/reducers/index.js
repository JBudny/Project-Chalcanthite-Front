// @flow
import { combineReducers } from 'redux';

import type { Action } from '../types/redux.types';
import authReducer from './authReducer';
import postsReducer from './postsReducer';

export default combineReducers<Object, Action>({
  posts: postsReducer,
  auth: authReducer,
});
