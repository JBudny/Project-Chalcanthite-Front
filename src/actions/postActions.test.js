import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import {
  getModesByDateInitialRequested,
  getModesByDateInitialDone,
  getModesByDateInitialFailed,
  getModesByDateInitial
} from "./postActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const { REACT_APP_API_URL } = process.env;
const quantity = 5;
const URL = `${REACT_APP_API_URL}/modes/top/${quantity}`;
const mockedData = [
  {
    tags: [],
    thumbnail: "/path/to/default.img",
    favorites: 0,
    points: 0,
    _id: "5d2f57294b9625238ce44575",
    createdAt: "2019-07-17T17:13:13.029Z",
    author: "5cf2a6fded450065969652b2",
    __v: 0
  },
  {
    tags: [],
    thumbnail: "/path/to/default.img",
    favorites: 0,
    points: 0,
    _id: "5d2f58a24b9625238ce44577",
    createdAt: "2019-07-17T17:19:30.091Z",
    author: "5cf2a6fded450065969652b2",
    __v: 0
  }
];
const ERROR_MESSAGE = "TypeError: Failed to fetch";

describe("action creator", () => {
  it("creates GET_MODES_BY_DATE_INITIAL_REQUESTED action", () => {
    expect(getModesByDateInitialRequested()).toMatchSnapshot();
  });

  it("creates GET_MODES_BY_DATE_INITIAL_DONE action", () => {
    expect(getModesByDateInitialDone(mockedData)).toMatchSnapshot();
  });

  it("creates GET_MODES_BY_DATE_INITIAL_FAILED action", () => {
    expect(getModesByDateInitialFailed({ Error: ERROR_MESSAGE })).toMatchSnapshot();
  });
});

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates GET_MODES_BY_DATE_INITIAL_DONE when fetching posts has been done", () => {
    const store = mockStore({});
    fetchMock.getOnce(URL, {
      posts: mockedData
    });

    return store.dispatch(getModesByDateInitial(quantity)).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  it("creates GET_MODES_BY_DATE_INITIAL_FAILED when fetching posts has failed", () => {
    const store = mockStore({});
    fetchMock.mock(URL, () => {
      throw new Error(ERROR_MESSAGE);
    });

    return store.dispatch(getModesByDateInitial(quantity)).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
