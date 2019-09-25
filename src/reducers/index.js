// @flow
import { combineReducers } from 'redux';

import type { Action } from '../types/redux.types';
import getModesByDateInitial from './getModesByDateInitial';

export default combineReducers<Object, Action>({
  getModesByDateInitial,
});
