// @flow

import type { StyledComponent } from 'styled-components';
import styled from 'styled-components';

type Props = {
  color?: string,
  background?: string,
};

const CardWrapper: StyledComponent<Props, any, HTMLDivElement> = styled.div`
  padding: 0 0 0.4rem 0;
  color: ${({ color }) => color || '#1f2023'};
  background: ${({ background }) => background || '#d0d8e8'};
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 0.9rem;
`;

export default CardWrapper;
