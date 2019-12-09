// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';

import type { AppState } from '../../../types/redux.types';
import TabContainer from '../TabContainer';

const Top = () => {
  const isLoading = useSelector((state: AppState) => state.posts.isLoading);
  const isError = useSelector((state: AppState) => state.posts.isError);

  if (isLoading)
    return (
      <FormattedMessage
        id="navigation.tabs.loading"
        description="Tab loading message"
        defaultMessage="Loading..."
      />
    );
  if (isError)
    return (
      <FormattedMessage
        id="navigation.tabs.error"
        description="Tab loading error message"
        defaultMessage="Error: Can't load modes."
      />
    );
  return <TabContainer />;
};

export default Top;
