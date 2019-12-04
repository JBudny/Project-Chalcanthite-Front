// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import TextWrapper from './Text.styles';

const Text = () => {
  return (
    <TextWrapper>
      <FormattedMessage
        id="loginModal.loginForm.description"
        description="Login form description"
        defaultMessage="Connect with Facebook."
      />
    </TextWrapper>
  );
};

export default Text;
