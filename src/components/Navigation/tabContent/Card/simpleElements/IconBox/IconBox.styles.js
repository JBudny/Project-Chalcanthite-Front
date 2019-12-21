// @flow

import type { StyledComponent } from 'styled-components';
import styled from 'styled-components';

type Props = {
  iconWidth?: string,
  iconRightBorder?: string,
  iconLeftBorder?: string,
  iconColor: string,
  iconSize?: string,
  iconTransform?: string,
};

const IconBox: StyledComponent<Props, any, HTMLButtonElement> = styled.button`
  background: transparent;
  border: none;
  display: inline-block;
  width: ${({ iconWidth }) => iconWidth || 'auto'};
  border-right: ${({ iconRightBorder }) => iconRightBorder || 'none none #A3BAC3'};
  border-left: ${({ iconLeftBorder }) => iconLeftBorder || 'none none #A3BAC3'};
  color: ${({ iconColor }) => iconColor};
  font-size: ${({ iconSize }) => iconSize || 'medium'};
  transform: ${({ iconTransform }) => iconTransform || 'none'};
  cursor: pointer;

  &:disabled {
    color: #aaa;
  }
`;

export default IconBox;
