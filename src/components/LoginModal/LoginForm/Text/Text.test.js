import 'jest-styled-components';

import React from 'react';

import dummyInitialState from '../../../../utils/testUtils/dummyData/dummyInitialState';
import renderWithRedux from '../../../../utils/testUtils/renderWithRedux';
import Text from './Text';

test('Text component should render properly', () => {
  const initialState = { ...dummyInitialState };
  const { asFragment } = renderWithRedux(<Text />, { initialState });

  expect(asFragment()).toMatchSnapshot();
});
