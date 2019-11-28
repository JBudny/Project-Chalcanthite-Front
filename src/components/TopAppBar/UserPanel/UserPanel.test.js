import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import renderWithRedux from '../../../utils/tests/renderWithRedux';
import UserPanel from './UserPanel';

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
