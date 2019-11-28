import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import index from '../../../reducers/index';
import UserPanel from './UserPanel';

const renderWithRedux = (ui, { initialState, store = createStore(index, initialState) } = {}) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};

test('UserPanel component should render Log in button when user is not logged in', () => {
  const initialState = {
    auth: { auth: false },
  };
  let store;
  const { getByRole } = renderWithRedux(<UserPanel />, { initialState, store });

  expect(getByRole('button')).toMatchSnapshot();
});

test('UserPanel component should render UserAccount button when user is logged in', () => {
  const initialState = {
    auth: { auth: true },
  };
  let store;
  const { getByRole } = renderWithRedux(<UserPanel />, { initialState, store });

  expect(getByRole('button')).toMatchSnapshot();
});
