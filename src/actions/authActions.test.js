import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { REACT_APP_AUTH_LOGOUT, REACT_APP_AUTH_ME } from '../utils/env/typedEnv';
import { dummySetAuthDone, dummyUnsetAuthDone } from '../utils/testUtils/dummyData/dummyAuthData';
import { AUTH_ERROR, FETCH_ERROR } from '../utils/testUtils/dummyData/errors';
import {
  setAuth,
  setAuthDone,
  setAuthFailed,
  setAuthRequested,
  unsetAuth,
  unsetAuthDone,
  unsetAuthFailed,
  unsetAuthRequested,
} from './authActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('authActions should create', () => {
  it('setAuthRequested action', () => {
    expect(setAuthRequested()).toMatchSnapshot();
  });

  it('setAuthDone action', () => {
    expect(setAuthDone(dummySetAuthDone.name)).toMatchSnapshot();
  });

  it('setAuthFailed action', () => {
    expect(setAuthFailed(AUTH_ERROR)).toMatchSnapshot();
  });

  it('unsetAuthRequested action', () => {
    expect(unsetAuthRequested()).toMatchSnapshot();
  });

  it('unsetAuthDone action', () => {
    expect(unsetAuthDone()).toMatchSnapshot();
  });

  it('unsetAuthFailed action', () => {
    expect(unsetAuthFailed(AUTH_ERROR)).toMatchSnapshot();
  });
});

describe('Async setAuth action creator should dispatch', () => {
  let store = mockStore();

  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it('setAuthRequested action when it starts fetching data', async () => {
    await store.dispatch(setAuth());
    const actions = store.getActions();
    expect(actions[0]).toMatchSnapshot();
  });

  it('setAuthDone action when it fetched data without errors', async () => {
    fetchMock.getOnce(REACT_APP_AUTH_ME, { ...dummySetAuthDone });
    await store.dispatch(setAuth());
    const actions = store.getActions();
    expect(actions[1]).toMatchSnapshot();
  });

  it('setAuthFailed action when it catches an error', async () => {
    fetchMock.mock(REACT_APP_AUTH_ME, () => {
      throw new Error(FETCH_ERROR);
    });
    await store.dispatch(setAuth());
    const actions = store.getActions();
    expect(actions[1]).toMatchSnapshot();
  });

  it('setAuthFailed action when there is an error in response', async () => {
    fetchMock.mock(REACT_APP_AUTH_ME, () => {
      throw new Error(JSON.stringify(AUTH_ERROR));
    });
    await store.dispatch(setAuth());
    const actions = store.getActions();
    expect(actions[1]).toMatchSnapshot();
  });
});

describe('Async unsetAuth action creator should dispatch', () => {
  let store = mockStore();

  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it('unsetAuthRequested action when it starts fetching data', async () => {
    await store.dispatch(unsetAuth());
    const actions = store.getActions();
    expect(actions[0]).toMatchSnapshot();
  });

  it('unsetAuthDone action when it fetched data without errors', async () => {
    fetchMock.postOnce(REACT_APP_AUTH_LOGOUT, { ...dummyUnsetAuthDone });

    await store.dispatch(unsetAuth());
    const actions = store.getActions();
    expect(actions[1]).toMatchSnapshot();
  });

  it('unsetAuthFailed action when it catches an error', async () => {
    fetchMock.mock(REACT_APP_AUTH_LOGOUT, () => {
      throw new Error(FETCH_ERROR);
    });
    await store.dispatch(unsetAuth());
    const actions = store.getActions();
    expect(actions[1]).toMatchSnapshot();
  });

  it('unsetAuthFailed action when there is an error in response', async () => {
    fetchMock.mock(REACT_APP_AUTH_LOGOUT, () => {
      throw new Error(JSON.stringify(AUTH_ERROR));
    });
    await store.dispatch(unsetAuth());
    const actions = store.getActions();
    expect(actions[1]).toMatchSnapshot();
  });
});
