import Button from '@material-ui/core/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setAuth } from '../../../actions/authActions';
import styles from './UserPanel.styles';

const LoginButton = () => {
  const classes = styles();
  const { loginButton } = classes;
  const auth = useSelector(state => state.auth.auth);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setAuth());
  };

  return (
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
  );
};

export default LoginButton;
