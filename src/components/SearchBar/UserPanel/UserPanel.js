import React from 'react';
import { useSelector } from 'react-redux';

import LoginButton from './LoginButton';
import UserAccountButton from './UserAccountButton';

const UserPanel = () => {
  const auth = useSelector(state => {
    return state.auth.auth;
  });
  return <>{auth ? <UserAccountButton /> : <LoginButton />}</>;
};

export default UserPanel;
