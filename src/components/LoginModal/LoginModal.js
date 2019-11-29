// @flow

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { closeLoginModal } from '../../actions/loginModalActions';
import type { AppState } from '../../types/redux.types';
import LoginForm from './LoginForm/LoginForm';
import LoginModalWrapper from './LoginModal.styles';

const LoginModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state: AppState) => state.loginModal.showModal);

  const modalDisplay = showModal ? 'flex' : 'none';

  const handleClose = (e: Event) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      dispatch(closeLoginModal());
    }
  };

  return (
    <LoginModalWrapper
      role="dialog"
      aria-labelledby="Login"
      modalDisplay={modalDisplay}
      onClick={handleClose}
    >
      <LoginForm />
    </LoginModalWrapper>
  );
};

export default LoginModal;
