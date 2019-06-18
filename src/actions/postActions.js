const getModesByDateInitial = quantity => {
  return dispatch => {
    fetch(`http://localhost:8080/modes/top/${quantity}`)
      .then(posts => posts.json())
      .then(posts => dispatch({ type: "GET_MODES_BY_DATE_INITIAL", posts }));
  };
};

export default getModesByDateInitial;
