// @flow

export type Posts = Array<{
  +tags: Array<string>,
  +thumbnail: string,
  +favorites: number,
  +points: number,
  +gallery: Array<string>,
  +_id: string,
  +createdAt: string,
  +title: string,
  +shortDescription: string,
  +author: string,
  +actualCode: string,
}>;

export type PostsReducer = {
  +isLoading: boolean,
  +isError: boolean,
  +posts: Posts,
};

export type LoginModalReducer = {
  +showModal: boolean,
};

export type AuthReducer = { +auth: boolean };

export type PostsState = {|
  posts: {
    +isLoading: boolean,
    +isError: boolean,
    +posts: Posts,
  },
|};

export type AuthState = {| +auth: { auth: boolean } |};

export type LoginModalState = {
  +loginModal: {
    +showModal: boolean,
  },
};

export type AppState = {
  ...LoginModalState,
  ...AuthState,
  ...PostsState,
  /*
  +loginModal?: LoginModalState,
  +auth?: AuthState,
  +posts?: PostsState, */
};

export type UnsetAuth = {
  type: 'UNSET_AUTH',
};

export type SetAuth = {
  type: 'SET_AUTH',
};

export type OpenLoginModal = {
  type: 'OPEN_LOGIN_MODAL',
};

export type CloseLoginModal = {
  type: 'CLOSE_LOGIN_MODAL',
};

export type GetModesByDateInitialRequested = {
  type: 'GET_MODES_BY_DATE_INITIAL_REQUESTED',
};

export type GetModesByDateInitialDone = {
  type: 'GET_MODES_BY_DATE_INITIAL_DONE',
  payload: Posts,
};

export type GetModesByDateInitialFailed = {
  type: 'GET_MODES_BY_DATE_INITIAL_FAILED',
  payload: string,
};

export type Action =
  | $Shape<{ type: null }>
  | GetModesByDateInitialRequested
  | GetModesByDateInitialDone
  | GetModesByDateInitialFailed
  | SetAuth
  | UnsetAuth
  | OpenLoginModal
  | CloseLoginModal;
