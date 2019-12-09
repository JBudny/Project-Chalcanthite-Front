// @flow

import type { StyledComponent } from 'styled-components';
import styled from 'styled-components';

const TitleWrapper: StyledComponent<any, any, HTMLHeadingElement> = styled.h2`
  margin: 0.5rem 0;
  font-size: 2rem;
  font-weight: bold;
`;

export default TitleWrapper;
