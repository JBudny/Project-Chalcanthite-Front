import 'jest-styled-components';

import React from 'react';

import dummyInitialState from '../../../../utils/testUtils/dummyData/dummyInitialState';
import renderWithRedux from '../../../../utils/testUtils/renderWithRedux';
import LoginButtonFb from './LoginButtonFb';

test('LoginButtonFb component should render properly', () => {
  const initialState = { ...dummyInitialState };
  const { asFragment } = renderWithRedux(<LoginButtonFb />, { initialState });

  expect(asFragment()).toMatchSnapshot();
});
