import React from 'react';
import { useSelector } from 'react-redux';

import TabContainer from '../TabContainer';

const Random = () => {
  const isLoading = useSelector(state => state.posts.isLoading);
  const isError = useSelector(state => state.posts.isError);
  if (isLoading) return 'Loading...';
  if (isError) return 'Error';
  return <TabContainer />;
};

export default Random;
