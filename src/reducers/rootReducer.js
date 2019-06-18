const initState = {
  posts: [
    {
      tags: [],
      thumbnail: "",
      favorites: 0,
      points: 0,
      _id: "",
      createdAt: "",
      author: "",
      __v: 0
    }
  ]
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_MODES_BY_DATE_INITIAL":
      return {
        posts: [action.posts]
      };
    default:
      return state;
  }
};

export default rootReducer;
