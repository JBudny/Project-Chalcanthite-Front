// @flow
import React from 'react';

import CloseButton from './CloseButton/CloseButton';
import LoginFormWrapper from './LoginForm.styles';
import Text from './Text/Text';
import Title from './Title/Title';

const LoginForm = () => {
  const title = 'Login';
  const text = 'Connect with facebook account.';

  return (
    <LoginFormWrapper>
      <CloseButton />
      <Title title={title} />
      <Text text={text} />
    </LoginFormWrapper>
  );
};

export default LoginForm;
