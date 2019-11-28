import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { setAuth } from '../../../actions/authActions';
import LoginButton from './LoginButton';

const mockStore = configureStore([]);

describe('LoginButton component should', () => {
  let store;
  let loginButton;

  beforeEach(() => {
    store = mockStore({
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

  it('dispatch setAuth action when clicked', () => {
    renderer.act(() => {
      loginButton.root.findByType('button').props.onClick();
    });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(setAuth());
  });
});
