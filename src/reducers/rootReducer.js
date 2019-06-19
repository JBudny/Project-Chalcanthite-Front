const initState = {
  posts: []
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_MODES_BY_DATE_INITIAL":
      return {
        posts: action.posts
      };
    default:
      return state;
  }
};

export default rootReducer;
