import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { openLoginModal } from '../../../actions/loginModalActions';
import LoginButton from './LoginButton';

const mockStore = configureStore([]);

describe('LoginButton component should', () => {
  let store;
  let loginButton;

  beforeEach(() => {
    store = mockStore({
      loginModal: { showModal: false },
      auth: { auth: false },
    });

    store.dispatch = jest.fn();

    loginButton = renderer.create(
      <Provider store={store}>
        <LoginButton />
      </Provider>,
    );
  });

  it('render Log in button properly', () => {
    expect(loginButton.toJSON()).toMatchSnapshot();
  });

  it('dispatch openLoginModal action when clicked', () => {
    renderer.act(() => {
      loginButton.root.findByType('button').props.onClick();
    });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(openLoginModal());
  });
});
