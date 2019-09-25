// @flow

import type { StyledComponent } from 'styled-components';
import styled from 'styled-components';

type Props = {
  textColor?: string,
  fontSize?: string,
  backgroundColor?: string,
  width?: string,
  height?: string,
  border?: string,
};

const Code: StyledComponent<Props, any, HTMLButtonElement> = styled.button`
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: ${({ width }) => width || '6.87rem'};
  height: ${({ height }) => height || '2.81rem'};
  color: ${({ textColor }) => textColor || '#fff'};
  font-size: ${({ fontSize }) => fontSize || '1.25rem'};
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor || 'rgba(208, 216, 232, 0.32)'};
  user-select: none;
  border: ${({ border }) => border || 'none'};
  transition: transform 0.05s;
  &:active {
    transform: scale(0.96);
  }
`;

export default Code;
