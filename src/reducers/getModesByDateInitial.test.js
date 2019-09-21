import {
  getModesByDateInitialDone,
  getModesByDateInitialFailed,
  getModesByDateInitialRequested,
} from '../actions/postActions';
import reducer from './getModesByDateInitial';

const initState = {
  isLoading: false,
  isError: false,
  posts: [],
};
const mockedData = [
  {
    tags: [],
    thumbnail: '/path/to/default.img',
    favorites: 0,
    points: 0,
    _id: '5d2f57294b9625238ce44575',
    createdAt: '2019-07-17T17:13:13.029Z',
    author: '5cf2a6fded450065969652b2',
    __v: 0,
  },
  {
    tags: [],
    thumbnail: '/path/to/default.img',
    favorites: 0,
    points: 0,
    _id: '5d2f58a24b9625238ce44577',
    createdAt: '2019-07-17T17:19:30.091Z',
    author: '5cf2a6fded450065969652b2',
    __v: 0,
  },
];
const ERROR_MESSAGE = 'TypeError: Failed to fetch';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle GET_MODES_BY_DATE_INITIAL_REQUESTED', () => {
    expect(reducer(initState, getModesByDateInitialRequested())).toMatchSnapshot();
  });

  it('should handle GET_MODES_BY_DATE_INITIAL_DONE', () => {
    expect(reducer(initState, getModesByDateInitialDone(mockedData))).toMatchSnapshot();
  });

  it('should handle GET_MODES_BY_DATE_INITIAL_FAILED', () => {
    expect(
      reducer(initState, getModesByDateInitialFailed({ Error: ERROR_MESSAGE })),
    ).toMatchSnapshot();
  });
});
