import React from 'react';

import renderWithRedux from './renderWithRedux';

test('renderWithRedux function should provide component with redux store and testing-library methods', () => {
  const initialState = {};
  const result = renderWithRedux(<>test</>, { initialState });
  expect(result).toMatchSnapshot();
});
