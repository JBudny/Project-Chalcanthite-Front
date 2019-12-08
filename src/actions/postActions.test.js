import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { REACT_APP_MODE_TOP } from '../utils/env/typedEnv';
import dummyPosts from '../utils/testUtils/dummyData/dummyPosts';
import { FETCH_ERROR } from '../utils/testUtils/dummyData/errors';
import {
  getModesByDateInitial,
  getModesByDateInitialDone,
  getModesByDateInitialFailed,
  getModesByDateInitialRequested,
} from './postActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const quantity = 5;

describe('actions should create an action to', () => {
  it('request for modes', () => {
    expect(getModesByDateInitialRequested()).toMatchSnapshot();
  });

  it('fetch modes', () => {
    expect(getModesByDateInitialDone(dummyPosts)).toMatchSnapshot();
  });

  it('return an error', () => {
    expect(getModesByDateInitialFailed(FETCH_ERROR)).toMatchSnapshot();
  });
});

describe('async action should dispatch an action to', () => {
  let store = mockStore();
  const URL = `${REACT_APP_MODE_TOP}/${quantity}`;

  afterEach(() => {
    fetchMock.restore();
  });

  it('request modes', async () => {
    fetchMock.getOnce(URL, {
      posts: dummyPosts,
    });

    await store.dispatch(getModesByDateInitial(quantity));
    const actions = store.getActions();
    expect(actions[0]).toMatchSnapshot();
  });

  it('fetch modes', async () => {
    fetchMock.getOnce(URL, {
      posts: dummyPosts,
    });

    await store.dispatch(getModesByDateInitial(quantity));
    const actions = store.getActions();
    expect(actions[1]).toMatchSnapshot();
  });

  it('return an error', async () => {
    store = mockStore();

    fetchMock.mock(URL, () => {
      throw new Error(FETCH_ERROR);
    });

    await store.dispatch(getModesByDateInitial(quantity));
    const actions = store.getActions();
    expect(actions[1]).toMatchSnapshot();
  });
});
