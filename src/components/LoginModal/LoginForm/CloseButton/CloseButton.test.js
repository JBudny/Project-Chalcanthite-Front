import 'jest-styled-components';

import { fireEvent } from '@testing-library/react';
import React from 'react';
import configureStore from 'redux-mock-store';

import { closeLoginModal } from '../../../../actions/loginModalActions';
import dummyInitialState from '../../../../utils/testUtils/dummyData/dummyInitialState';
import renderWithRedux from '../../../../utils/testUtils/renderWithRedux';
import CloseButton from './CloseButton';

test('CloseButton component render properly', () => {
  const initialState = { ...dummyInitialState, loginModal: { showModal: true } };

  const { asFragment } = renderWithRedux(<CloseButton />, { initialState });
  expect(asFragment()).toMatchSnapshot();
});

test('CloseButton component dispatches an closeLoginModal action when clicked', () => {
  const mockStore = configureStore([]);
  const store = mockStore({ ...dummyInitialState, loginModal: { showModal: true } });

  store.dispatch = jest.fn();

  const { getByRole } = renderWithRedux(<CloseButton />, { store });

  fireEvent.click(getByRole('button'));
  expect(store.dispatch).toHaveBeenCalledTimes(1);
  expect(store.dispatch).toHaveBeenCalledWith(closeLoginModal());
});
