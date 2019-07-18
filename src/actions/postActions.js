export const GET_MODES_BY_DATE_INITIAL_REQUESTED = "GET_MODES_BY_DATE_INITIAL_REQUESTED";
export const GET_MODES_BY_DATE_INITIAL_DONE = "GET_MODES_BY_DATE_INITIAL_DONE";
export const GET_MODES_BY_DATE_INITIAL_FAILED = "GET_MODES_BY_DATE_INITIAL_FAILED";
const { REACT_APP_API_URL } = process.env;

export const getModesByDateInitialRequested = () => ({
  type: "GET_MODES_BY_DATE_INITIAL_REQUESTED"
});

export const getModesByDateInitialDone = posts => ({
  type: "GET_MODES_BY_DATE_INITIAL_DONE",
  payload: posts
});

export const getModesByDateInitialFailed = error => ({
  type: "GET_MODES_BY_DATE_INITIAL_FAILED",
  payload: error
});

export const getModesByDateInitial = quantity => dispatch => {
  dispatch(getModesByDateInitialRequested());
  return fetch(`${REACT_APP_API_URL}/modes/top/${quantity}`)
    .then(posts => posts.json())
    .then(posts => dispatch(getModesByDateInitialDone(posts)))
    .catch(error => dispatch(getModesByDateInitialFailed(error)));
};
