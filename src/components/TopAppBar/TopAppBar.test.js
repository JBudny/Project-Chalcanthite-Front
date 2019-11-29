import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import initialState from '../../utils/testUtils/dummyData/dummyInitialState';
import renderWithRedux from '../../utils/testUtils/renderWithRedux';
import TopAppBar from './TopAppBar';

test('TopAppBar component should render properly', () => {
  const { asFragment } = renderWithRedux(<TopAppBar />, { initialState });
  expect(asFragment()).toMatchSnapshot();
});
