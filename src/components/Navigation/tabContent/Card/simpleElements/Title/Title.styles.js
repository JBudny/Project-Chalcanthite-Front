// @flow

import type { StyledComponent } from 'styled-components';
import styled from 'styled-components';

type Props = {
  textColor?: string,
  fontSize?: string,
};

const Title: StyledComponent<Props, any, HTMLDivElement> = styled.div`
  text-transform: uppercase;
  font-weight: 500;
  color: ${({ textColor }) => textColor || '#4472ca'};
  font-size: ${({ fontSize }) => fontSize || '1.125rem'};
`;

export default Title;
