// @flow

import React from 'react';
import { useSelector } from 'react-redux';

import type { AppState } from '../../../types/redux.types';
import LoginButton from './LoginButton';
import UserAccountButton from './UserAccountButton';

const UserPanel = () => {
  const auth = useSelector((state: AppState) => state.auth.auth);

  return <>{auth ? <UserAccountButton /> : <LoginButton />}</>;
};

export default UserPanel;
