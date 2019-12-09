// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import TitleWrapper from './Title.styles';

const Title = () => {
  return (
    <TitleWrapper id="Login">
      <FormattedMessage
        id="loginModal.loginForm.titleText"
        description="Login form title"
        defaultMessage="Login"
      />
    </TitleWrapper>
  );
};

export default Title;
