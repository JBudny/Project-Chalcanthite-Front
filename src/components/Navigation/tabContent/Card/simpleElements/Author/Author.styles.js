// @flow

import type { StyledComponent } from 'styled-components';
import styled from 'styled-components';

type Props = {
  textColor?: string,
  fontSize?: string,
  linkColor?: string,
  visitedColor?: string,
  activeColor?: string,
  hoverColor?: string,
};

const Author: StyledComponent<Props, any, HTMLDivElement> = styled.div`
  font-weight: 500;
  color: ${({ textColor }) => textColor || 'inherit'};
  font-size: ${({ fontSize }) => fontSize || '1rem'};

  a {
    color: ${({ linkColor }) => linkColor || '#4472ca'};
    text-decoration: none;
  }

  a:visited {
    color: ${({ visitedColor }) => visitedColor || '#9999ca'};
  }

  a:hover {
    color: ${({ hoverColor }) => hoverColor || '#9999ca'};
    text-decoration: underline;
  }

  a:active {
    color: ${({ activeColor }) => activeColor || '#9999ca'};
  }
`;

export default Author;
