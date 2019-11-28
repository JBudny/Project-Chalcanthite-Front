import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import renderWithRedux from '../../utils/tests/renderWithRedux';
import TopAppBar from './TopAppBar';

test('TopAppBar component should render properly', () => {
  const initialState = {
    auth: { auth: false },
  };
  let store;

  const { asFragment } = renderWithRedux(<TopAppBar />, { initialState, store });
  expect(asFragment()).toMatchSnapshot();
});
