// @flow

import type { StyledComponent } from 'styled-components';
import styled from 'styled-components';

const CloseButtonWrapper: StyledComponent<any, any, HTMLDivElement> = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0.5rem 0;

  button {
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    background-color: transparent;
  }
`;

export default CloseButtonWrapper;
