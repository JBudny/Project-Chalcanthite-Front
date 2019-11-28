import 'jest-styled-components';

import { fireEvent } from '@testing-library/react';
import React from 'react';
import configureStore from 'redux-mock-store';

import { closeLoginModal } from '../../actions/loginModalActions';
import renderWithRedux from '../../utils/tests/renderWithRedux';
import LoginModal from './LoginModal';

test('LoginModal component should render properly', () => {
  const initialState = {
    loginModal: { showModal: true },
    auth: { auth: false },
  };
  const { getByRole } = renderWithRedux(<LoginModal />, { initialState });

  expect(getByRole('dialog')).toMatchSnapshot();
});

test('LoginModal component should dispatch closeLoginModal action when clicked', () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    loginModal: { showModal: true },
    auth: { auth: false },
  });
  store.dispatch = jest.fn();
  const { getByRole } = renderWithRedux(<LoginModal />, { store });

  fireEvent.click(getByRole('dialog'));
  expect(store.dispatch).toHaveBeenCalledTimes(1);
  expect(store.dispatch).toHaveBeenCalledWith(closeLoginModal());
});
