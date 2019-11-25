// @flow

import {
  getModesByDateInitialDone,
  getModesByDateInitialFailed,
  getModesByDateInitialRequested,
} from '../actions/postActions';
import dummyPosts from '../utils/dummyCardProps/dummyPosts';
import reducer from './getModesByDateInitial';

const initState = {
  isLoading: false,
  isError: false,
  posts: [],
};
const ERROR_MESSAGE = 'TypeError: Failed to fetch';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: null })).toMatchSnapshot();
  });

  it('should handle GET_MODES_BY_DATE_INITIAL_REQUESTED', () => {
    expect(reducer(initState, getModesByDateInitialRequested())).toMatchSnapshot();
  });

  it('should handle GET_MODES_BY_DATE_INITIAL_DONE', () => {
    expect(reducer(initState, getModesByDateInitialDone(dummyPosts))).toMatchSnapshot();
  });

  it('should handle GET_MODES_BY_DATE_INITIAL_FAILED', () => {
    expect(
      reducer(initState, getModesByDateInitialFailed(`ERROR: ${ERROR_MESSAGE}`)),
    ).toMatchSnapshot();
  });
});
