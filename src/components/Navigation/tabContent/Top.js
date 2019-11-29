// @flow

import React from 'react';
import { useSelector } from 'react-redux';

import type { AppState } from '../../../types/redux.types';
import TabContainer from '../TabContainer';

const Top = () => {
  const isLoading = useSelector((state: AppState) => state.posts.isLoading);
  const isError = useSelector((state: AppState) => state.posts.isError);

  if (isLoading) return 'Loading...';
  if (isError) return 'Error';
  return <TabContainer />;
};

export default Top;
