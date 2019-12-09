// @flow

import type { StyledComponent } from 'styled-components';
import styled from 'styled-components';

const LoginButtonFbWrapper: StyledComponent<any, any, HTMLButtonElement> = styled.button`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  padding: 0.5rem;
  box-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.3);
  border: none;
  background: #1877f2;
  color: #fff;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: #188fff;
  }
  font-size: 1rem;
`;

export default LoginButtonFbWrapper;
