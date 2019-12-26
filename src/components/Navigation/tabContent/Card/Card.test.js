import 'jest-styled-components';

import React from 'react';

import dummyInitialState from '../../../../utils/testUtils/dummyData/dummyInitialState';
import dummyProcessedPost from '../../../../utils/testUtils/dummyData/dummyPost';
import renderWithRedux from '../../../../utils/testUtils/renderWithRedux';
import Card from './Card';

describe('Card', () => {
  const initialState = { ...dummyInitialState };

  const { asFragment } = renderWithRedux(<Card post={dummyProcessedPost} />, { initialState });

  test('should match the snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
