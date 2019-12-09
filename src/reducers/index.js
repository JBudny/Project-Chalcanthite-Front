// @flow
import { combineReducers } from 'redux';

import type { Action } from '../types/redux.types';
import authReducer from './authReducer';
import loginModalReducer from './loginModalReducer';
import postsReducer from './postsReducer';

export default combineReducers<Object, Action>({
  posts: postsReducer,
  auth: authReducer,
  loginModal: loginModalReducer,
});
