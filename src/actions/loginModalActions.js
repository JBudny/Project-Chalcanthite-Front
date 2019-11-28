// @flow

import type { CloseLoginModal, OpenLoginModal } from '../types/redux.types';

export const OPEN_LOGIN_MODAL = 'OPEN_LOGIN_MODAL';

export const CLOSE_LOGIN_MODAL = 'CLOSE_LOGIN_MODAL';

export const openLoginModal = (): OpenLoginModal => {
  return {
    type: 'OPEN_LOGIN_MODAL',
  };
};

export const closeLoginModal = (): CloseLoginModal => ({
  type: 'CLOSE_LOGIN_MODAL',
});
