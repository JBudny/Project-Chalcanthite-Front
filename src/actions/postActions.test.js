import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import dummyPosts from '../utils/dummyCardProps/dummyPosts';
import ERROR_MESSAGE from '../utils/dummyCardProps/errorMessage';
import {
  getModesByDateInitial,
  getModesByDateInitialDone,
  getModesByDateInitialFailed,
  getModesByDateInitialRequested,
} from './postActions';

if (!process.env.REACT_APP_API_URL) throw new Error('REACT_APP_API_URL missing');
const { REACT_APP_API_URL } = process.env;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const quantity = 5;
const URL = `${REACT_APP_API_URL}/mode/top/${quantity}`;

describe('actions should create an action to', () => {
  it('request for modes', () => {
    expect(getModesByDateInitialRequested()).toMatchSnapshot();
  });

  it('fetch modes', () => {
    expect(getModesByDateInitialDone(dummyPosts)).toMatchSnapshot();
  });

  it('return an error', () => {
    expect(getModesByDateInitialFailed(`ERROR: ${ERROR_MESSAGE}`)).toMatchSnapshot();
  });
});

describe('async action should dispatch an action to', () => {
  let store = mockStore();

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
      throw new Error(ERROR_MESSAGE);
    });

    await store.dispatch(getModesByDateInitial(quantity));
    const actions = store.getActions();
    expect(actions[1]).toMatchSnapshot();
  });
});
