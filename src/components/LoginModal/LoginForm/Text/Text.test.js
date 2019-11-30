import 'jest-styled-components';

import { render } from '@testing-library/react';
import React from 'react';

import Text from './Text';

test('Text component should render properly', () => {
  const { asFragment } = render(<Text text="Connect with facebook account." />);
  expect(asFragment()).toMatchSnapshot();
});
