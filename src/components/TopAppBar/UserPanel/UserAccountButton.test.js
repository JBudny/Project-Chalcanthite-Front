import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import index from '../../../reducers/index';
import UserAccountButton from './UserAccountButton';

const renderWithRedux = (ui, { initialState, store = createStore(index, initialState) } = {}) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};

test('UserAccountButton component should render properly', () => {
  const initialState = {
    auth: { auth: false },
  };
  let store;
  const { getByRole } = renderWithRedux(<UserAccountButton />, { initialState, store });

  expect(getByRole('button')).toMatchSnapshot();
});
