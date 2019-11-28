import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { closeLoginModal } from '../../actions/loginModalActions';
import LoginModalWrapper from './LoginModal.styles';

const LoginModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.loginModal.showModal);

  const modalDisplay = showModal ? 'block' : 'none';
  const handleClose = () => {
    dispatch(closeLoginModal());
  };
  return <LoginModalWrapper role="dialog" modalDisplay={modalDisplay} onClick={handleClose} />;
};

export default LoginModal;
