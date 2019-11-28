// @flow

import { render } from '@testing-library/react';
import type { Element } from 'react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import index from '../../reducers/index';
import type { AuthState, LoginModalState, PostsState } from '../../types/redux.types';

type State = {
  loginModal?: LoginModalState,
  auth?: AuthState,
  posts?: PostsState,
};
const renderWithRedux = (
  ui: Element<any>,
  { initialState, store = createStore(index, initialState) }: { initialState?: State, store?: any },
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};

export default renderWithRedux;
