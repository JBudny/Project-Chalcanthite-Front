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

export type PostsReducer = {|
  +isLoading: boolean,
  +isError: boolean,
  +posts: Posts,
  +error: Object,
|};

export type AuthReducer = {|
  +auth: boolean,
  +error: Object,
  +isError: boolean,
  +isLoading: boolean,
  +userName: string,
|};

export type LoginModalReducer = {|
  +showModal: boolean,
|};

export type PostsInitialState = {|
  +isLoading: false,
  +isError: false,
  +posts: Array<Object>,
  +error: Object,
|};

export type AuthInitialState = {|
  +isLoading: boolean,
  +isError: boolean,
  +auth: boolean,
  +error: Object,
  +userName: string,
|};

export type LoginModalInitialState = {|
  +showModal: boolean,
|};

export type PostsState = {| +posts: { ...PostsInitialState } |};

export type AuthState = {| +auth: { ...AuthInitialState } |};

export type LoginModalState = {| +loginModal: { ...LoginModalInitialState } |};

export type AppState = {|
  ...LoginModalState,
  ...AuthState,
  ...PostsState,
|};

export type SetAuthRequested = {
  type: 'SET_AUTH_REQUESTED',
};

export type SetAuthDone = {
  type: 'SET_AUTH_DONE',
  payload: string,
};

export type SetAuthFailed = {
  type: 'SET_AUTH_FAILED',
  payload: string,
};

export type OpenLoginModal = {
  type: 'OPEN_LOGIN_MODAL',
};

export type UnsetAuthRequested = {
  type: 'UNSET_AUTH_REQUESTED',
};

export type UnsetAuthDone = {
  type: 'UNSET_AUTH_DONE',
};

export type UnsetAuthFailed = {
  type: 'UNSET_AUTH_FAILED',
  payload: string,
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
  | SetAuthRequested
  | SetAuthDone
  | SetAuthFailed
  | UnsetAuthRequested
  | UnsetAuthDone
  | UnsetAuthFailed
  | OpenLoginModal
  | CloseLoginModal;
