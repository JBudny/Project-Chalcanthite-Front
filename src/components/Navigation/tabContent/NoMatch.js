// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from '../Navigation.styles';

const NoMatch = () => {
  const classes = styles();
  const { notFound } = classes;

  return (
    <div className={notFound}>
      <span>
        <FormattedMessage
          id="navigation.tabs.noMatch.code"
          description="Error code"
          defaultMessage="404 Not Found"
        />
      </span>
      <hr />
      <p>
        <FormattedMessage
          id="navigation.tabs.noMatch.description"
          description="Error description"
          defaultMessage="The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved."
        />
      </p>
    </div>
  );
};

export default NoMatch;
