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

export type State = {
  +isLoading: boolean,
  +isError: boolean,
  +posts: Posts,
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
  | GetModesByDateInitialFailed;
