// @flow

import type { StyledComponent } from 'styled-components';
import styled from 'styled-components';

type Props = {
  modalDisplay?: string,
};

const LoginModalWrapper: StyledComponent<Props, any, HTMLDivElement> = styled.div`
  display: ${({ modalDisplay }) => modalDisplay || 'none'};
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  color: #000;
  overflow-y: hidden;
  z-index: 1;
`;

export default LoginModalWrapper;
