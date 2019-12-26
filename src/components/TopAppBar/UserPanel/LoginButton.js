// @flow

import Button from '@material-ui/core/Button';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';

import { openLoginModal } from '../../../actions/loginModalActions';
import LoginModal from '../../LoginModal/LoginModal';
import styles from './UserPanel.styles';

const LoginButton = () => {
  const dispatch = useDispatch();

  const classes = styles();
  const { loginButton } = classes;

  const handleClick = () => {
    dispatch(openLoginModal());
  };

  return (
    <>
      <Button
        color="inherit"
        variant="outlined"
        className={loginButton}
        onClick={handleClick}
        aria-label="login button"
      >
        <FormattedMessage
          id="topAppBar.userPanel.logInButton"
          description="Log in button"
          defaultMessage="Log in"
        />
      </Button>
      <LoginModal />
    </>
  );
};

export default LoginButton;
