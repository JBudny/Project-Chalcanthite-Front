import 'jest-styled-components';

import React from 'react';

import dummyInitialState from '../../../../utils/testUtils/dummyData/dummyInitialState';
import renderWithRedux from '../../../../utils/testUtils/renderWithRedux';
import Title from './Title';

test('Title component should render properly', () => {
  const initialState = { ...dummyInitialState };
  const { asFragment } = renderWithRedux(<Title />, { initialState });

  expect(asFragment()).toMatchSnapshot();
});
