import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import dummyInitialState from '../../../utils/testUtils/dummyData/dummyInitialState';
import renderWithRedux from '../../../utils/testUtils/renderWithRedux';
import UserAccountButton from './UserAccountButton';

test('UserAccountButton component should render properly', () => {
  const initialState = { ...dummyInitialState };

  const { getByRole } = renderWithRedux(<UserAccountButton />, { initialState });

  expect(getByRole('button')).toMatchSnapshot();
});
