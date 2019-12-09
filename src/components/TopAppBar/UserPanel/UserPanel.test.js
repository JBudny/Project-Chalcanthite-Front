import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import dummyInitialState from '../../../utils/testUtils/dummyData/dummyInitialState';
import renderWithRedux from '../../../utils/testUtils/renderWithRedux';
import UserPanel from './UserPanel';

test('UserPanel component should render Log in button when user is not logged in', () => {
  const initialState = { ...dummyInitialState };
  const { asFragment } = renderWithRedux(<UserPanel />, { initialState });

  expect(asFragment()).toMatchSnapshot();
});

test('UserPanel component should render UserAccount button when user is logged in', () => {
  const initialState = { ...dummyInitialState, auth: { auth: true } };
  const { asFragment } = renderWithRedux(<UserPanel />, { initialState });
  expect(asFragment()).toMatchSnapshot();
});
