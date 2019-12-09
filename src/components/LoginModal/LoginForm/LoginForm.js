// @flow

import React from 'react';

import CloseButton from './CloseButton/CloseButton';
import LoginButtonFb from './LoginButtonFb/LoginButtonFb';
import LoginFormWrapper from './LoginForm.styles';
import Text from './Text/Text';
import Title from './Title/Title';

const LoginForm = () => {
  return (
    <LoginFormWrapper>
      <CloseButton />
      <Title />
      <Text />
      <LoginButtonFb />
    </LoginFormWrapper>
  );
};

export default LoginForm;
