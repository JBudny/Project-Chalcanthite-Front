// @flow

import Button from '@material-ui/core/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { openLoginModal } from '../../../actions/loginModalActions';
import type { AppState } from '../../../types/redux.types';
import LoginModal from '../../LoginModal/LoginModal';
import styles from './UserPanel.styles';

const LoginButton = () => {
  const classes = styles();
  const { loginButton } = classes;
  const auth = useSelector((state: AppState) => state.auth.auth);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openLoginModal());
  };

  return (
    <>
      <Button
        color="inherit"
        variant="outlined"
        className={loginButton}
        checked={auth}
        onClick={handleClick}
        aria-label="login button"
      >
        Log in
      </Button>
      <LoginModal />
    </>
  );
};

export default LoginButton;
