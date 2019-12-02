// @flow
import React from 'react';

import CloseButton from './CloseButton/CloseButton';
import LoginFormWrapper from './LoginForm.styles';
import Text from './Text/Text';
import Title from './Title/Title';

const LoginForm = () => {
  return (
    <LoginFormWrapper>
      <CloseButton />
      <Title />
      <Text />
    </LoginFormWrapper>
  );
};

export default LoginForm;
