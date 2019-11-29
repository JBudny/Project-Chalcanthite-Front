// @flow
import React from 'react';

import CloseButton from './CloseButton/CloseButton';
import LoginFormWrapper from './LoginForm.styles';

const LoginForm = () => {
  return (
    <LoginFormWrapper>
      <CloseButton />
    </LoginFormWrapper>
  );
};

export default LoginForm;
