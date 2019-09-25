// @flow

import type { StyledComponent } from 'styled-components';
import styled from 'styled-components';

type Props = {
  textColor?: string,
  linkColor?: string,
  fontSize?: string,
  visitedColor?: string,
  activeColor?: string,
  hoverColor?: string,
};

const Tags: StyledComponent<Props, any, HTMLDivElement> = styled.div`
  font-weight: 500;
  color: ${({ textColor }) => textColor || 'inherit'};
  font-size: ${({ fontSize }) => fontSize || 'inherit'};

  span {
    color: ${({ textColor }) => textColor || '#636363'};
    font-weight: 500;
  }

  a {
    font-weight: 400;
    color: ${({ linkColor }) => linkColor || '#636363'};
    text-decoration: none;
  }

  a:visited {
    color: ${({ visitedColor }) => visitedColor || '#9c9c9c'};
  }

  a:hover {
    color: ${({ hoverColor }) => hoverColor || '#9c9c9c'};
    text-decoration: underline;
  }

  a:active {
    color: ${({ activeColor }) => activeColor || '#9c9c9c'};
  }
`;

export default Tags;
