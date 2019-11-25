import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getModesByDateInitial } from '../../../actions/postActions';
import TabContainer from '../TabContainer';

const Fresh = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getModesByDateInitial(5));
  }, [dispatch]);

  const isLoading = useSelector(state => state.isLoading);
  const isError = useSelector(state => state.isError);

  if (isLoading) return 'Loading...';
  if (isError) return 'Error';
  return <TabContainer />;
};

export default Fresh;
