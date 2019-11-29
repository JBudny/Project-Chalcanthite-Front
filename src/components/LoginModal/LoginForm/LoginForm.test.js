import 'jest-styled-components';

import React from 'react';

import dummyInitialState from '../../../utils/testUtils/dummyData/dummyInitialState';
import renderWithRedux from '../../../utils/testUtils/renderWithRedux';
import LoginForm from './LoginForm';

test('LoginForm component should render properly', () => {
  const initialState = { ...dummyInitialState, loginModal: { showModal: true } };

  const { asFragment } = renderWithRedux(<LoginForm />, { initialState });
  expect(asFragment()).toMatchSnapshot();
});
