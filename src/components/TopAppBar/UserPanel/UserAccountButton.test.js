import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import renderWithRedux from '../../../utils/tests/renderWithRedux';
import UserAccountButton from './UserAccountButton';

test('UserAccountButton component should render properly', () => {
  const initialState = {
    auth: { auth: false },
  };
  let store;
  const { getByRole } = renderWithRedux(<UserAccountButton />, { initialState, store });

  expect(getByRole('button')).toMatchSnapshot();
});
