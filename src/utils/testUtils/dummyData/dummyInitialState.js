const dummyInitialState = {
  posts: {
    isLoading: false,
    isError: false,
    posts: [],
    error: {},
  },
  loginModal: { showModal: false },
  auth: {
    isLoading: false,
    isError: false,
    auth: false,
    error: {},
    userName: 'anonymous',
  },
};

export default dummyInitialState;
