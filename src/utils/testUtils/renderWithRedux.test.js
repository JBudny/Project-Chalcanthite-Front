import React from 'react';

import dummyInitialState from './dummyData/dummyInitialState';
import renderWithRedux from './renderWithRedux';

test('renderWithRedux function should provide component with redux store and testing-library methods', () => {
  const initialState = { ...dummyInitialState };
  const result = renderWithRedux(<>test</>, { initialState });
  expect(result).toMatchSnapshot();
});
