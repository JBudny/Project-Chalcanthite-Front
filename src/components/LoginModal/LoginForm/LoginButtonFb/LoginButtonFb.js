// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import { REACT_APP_AUTH_FACEBOOK } from '../../../../utils/env/typedEnv';
import LoginButtonFbWrapper from './LoginButtonFb.styles';
import FbIcon from './simpleElements/FbIcon';
import FbText from './simpleElements/FbText';

const LoginButtonFb = () => {
  const login = () => {
    window.location.replace(REACT_APP_AUTH_FACEBOOK);
  };

  return (
    <LoginButtonFbWrapper onClick={login} type="button" tabindex="0">
      <FbIcon className="fab fa-facebook" />
      <FbText>
        <FormattedMessage
          id="loginModal.loginForm.loginButtonFb.FbText"
          description="Continue with facebook button"
          defaultMessage="Continue with facebook"
        />
      </FbText>
    </LoginButtonFbWrapper>
  );
};

export default LoginButtonFb;
