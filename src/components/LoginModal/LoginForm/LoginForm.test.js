import { render } from '@testing-library/react';
import React from 'react';

import LoginForm from './LoginForm';

test('LoginForm component should render properly', () => {
  const { getByRole } = render(<LoginForm />);

  expect(getByRole('grid')).toMatchSnapshot();
});
