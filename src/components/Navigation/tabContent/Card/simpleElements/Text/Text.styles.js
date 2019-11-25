// @flow

import type { StyledComponent } from 'styled-components';
import styled from 'styled-components';

type Props = {
  textColor?: string,
  fontSize?: string,
};

const Text: StyledComponent<Props, any, HTMLDivElement> = styled.div`
  color: ${({ textColor }) => textColor || 'inherit'};
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  margin: 0 0.4rem;
`;

export default Text;
