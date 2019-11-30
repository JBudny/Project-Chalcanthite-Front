import 'jest-styled-components';

import { render } from '@testing-library/react';
import React from 'react';

import Title from './Title';

test('Title component should render properly', () => {
  const { asFragment } = render(<Title title="Login" />);
  expect(asFragment()).toMatchSnapshot();
});
