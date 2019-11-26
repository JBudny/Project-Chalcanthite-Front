// @flow

import {
  getModesByDateInitialDone,
  getModesByDateInitialFailed,
  getModesByDateInitialRequested,
} from '../actions/postActions';
import dummyPosts from '../utils/dummyCardProps/dummyPosts';
import postsReducer from './postsReducer';

const initState = {
  isLoading: false,
  isError: false,
  posts: [],
};
const ERROR_MESSAGE = 'TypeError: Failed to fetch';

describe('reducer', () => {
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
    expect(
      postsReducer(initState, getModesByDateInitialFailed(`ERROR: ${ERROR_MESSAGE}`)),
    ).toMatchSnapshot();
  });
});
