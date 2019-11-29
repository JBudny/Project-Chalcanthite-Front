// @flow

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getModesByDateInitial } from '../../../actions/postActions';
import type { AppState } from '../../../types/redux.types';
import TabContainer from '../TabContainer';

const Fresh = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getModesByDateInitial(5));
  }, [dispatch]);

  const isLoading = useSelector((state: AppState) => state.posts.isLoading);
  const isError = useSelector((state: AppState) => state.posts.isError);

  if (isLoading) return 'Loading...';
  if (isError) return 'Error';
  return <TabContainer />;
};

export default Fresh;
