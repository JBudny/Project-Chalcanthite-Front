export const GET_MODES_BY_DATE_INITIAL_REQUESTED = "GET_MODES_BY_DATE_INITIAL_REQUESTED";
export const GET_MODES_BY_DATE_INITIAL_DONE = "GET_MODES_BY_DATE_INITIAL_DONE";
export const GET_MODES_BY_DATE_INITIAL_FAILED = "GET_MODES_BY_DATE_INITIAL_FAILED";

export const getModesByDateInitialRequested = () => {
  return {
    type: "GET_MODES_BY_DATE_INITIAL_REQUESTED"
  };
};

export const getModesByDateInitialDone = posts => {
  return {
    type: "GET_MODES_BY_DATE_INITIAL_DONE",
    payload: posts
  };
};

export const getModesByDateInitialFailed = error => {
  return {
    type: "GET_MODES_BY_DATE_INITIAL_FAILED",
    payload: error
  };
};

export const getModesByDateInitial = quantity => {
  return dispatch => {
    dispatch(getModesByDateInitialRequested());
    fetch(`http://localhost:8080/modes/top/${quantity}`)
      .then(posts => posts.json())
      .then(posts => {
        dispatch(getModesByDateInitialDone(posts));
      })
      .catch(error => {
        dispatch(getModesByDateInitialFailed(error));
      });
  };
};
