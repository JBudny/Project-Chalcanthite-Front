// @flow

import {
  getModesByDateInitialDone,
  getModesByDateInitialFailed,
  getModesByDateInitialRequested,
} from '../actions/postActions';
import dummyInitialState from '../utils/testUtils/dummyData/dummyInitialState';
import dummyPosts from '../utils/testUtils/dummyData/dummyPosts';
import { FETCH_ERROR } from '../utils/testUtils/dummyData/errors';
import postsReducer from './postsReducer';

describe('reducer', () => {
  const initState = dummyInitialState.posts;

  it('should return the initial state', () => {
    expect(postsReducer(undefined, { type: null })).toMatchSnapshot();
  });

  it('should handle GET_MODES_BY_DATE_INITIAL_REQUESTED', () => {
    expect(postsReducer(initState, getModesByDateInitialRequested())).toMatchSnapshot();
  });

  it('should handle GET_MODES_BY_DATE_INITIAL_DONE', () => {
    expect(postsReducer(initState, getModesByDateInitialDone(dummyPosts))).toMatchSnapshot();
  });

  it('should handle GET_MODES_BY_DATE_INITIAL_FAILED', () => {
    expect(postsReducer(initState, getModesByDateInitialFailed(FETCH_ERROR))).toMatchSnapshot();
  });
});
