// @flow

import type { StyledComponent } from 'styled-components';
import styled from 'styled-components';

type Props = {
  textColor?: string,
  fontSize?: string,
};

const Favorites: StyledComponent<Props, any, HTMLDivElement> = styled.div`
  color: ${({ textColor }) => textColor || 'inherit'};
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  display: inline;
  line-height: 1.5rem;

  &:disabled {
    background: #aaa;
  }
`;

export default Favorites;
