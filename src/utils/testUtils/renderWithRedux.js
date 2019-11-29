// @flow

import { render } from '@testing-library/react';
import type { Element } from 'react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import index from '../../reducers/index';
import type { AppState } from '../../types/redux.types';

const renderWithRedux = (
  ui: Element<any>,
  {
    initialState,
    store = createStore(index, initialState),
  }: { initialState?: AppState, store?: any },
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};

export default renderWithRedux;
