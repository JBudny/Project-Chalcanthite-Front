import { fireEvent } from '@testing-library/react';
import React from 'react';
import configureStore from 'redux-mock-store';

import { openLoginModal } from '../../../actions/loginModalActions';
import dummyInitialState from '../../../utils/testUtils/dummyData/dummyInitialState';
import renderWithRedux from '../../../utils/testUtils/renderWithRedux';
import LoginButton from './LoginButton';

test('LoginButton component should render Log in button properly', () => {
  const initialState = { ...dummyInitialState, loginModal: { showModal: true } };

  const { asFragment } = renderWithRedux(<LoginButton />, { initialState });
  expect(asFragment()).toMatchSnapshot();
});

test('LoginButton component should dispatch openLoginModal action when clicked', () => {
  const mockStore = configureStore([]);
  const store = mockStore({ ...dummyInitialState });

  store.dispatch = jest.fn();
  const { getByText } = renderWithRedux(<LoginButton />, { store });

  fireEvent.click(getByText('Log in'));
  expect(store.dispatch).toHaveBeenCalledTimes(1);
  expect(store.dispatch).toHaveBeenCalledWith(openLoginModal());
});
