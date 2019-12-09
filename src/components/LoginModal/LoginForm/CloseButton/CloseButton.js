// @flow

import React from 'react';
import { useDispatch } from 'react-redux';

import { closeLoginModal } from '../../../../actions/loginModalActions';
import CloseButtonWrapper from './CloseButton.styles';

const CloseButton = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeLoginModal());
  };

  return (
    <CloseButtonWrapper>
      <button type="button" onClick={handleClose}>
        ✖
      </button>
    </CloseButtonWrapper>
  );
};

export default CloseButton;
