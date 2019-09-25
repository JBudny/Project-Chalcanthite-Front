// @flow

import type { StyledComponent } from 'styled-components';
import styled from 'styled-components';

type Props = {
  thumbnailUrl: string,
};

const Picture: StyledComponent<Props, any, HTMLDivElement> = styled.div`
  position: relative;
  min-height: 150px;
  margin: 0 0 5px 0;
  background: #1f2023;
  background: url(${({ thumbnailUrl }) => thumbnailUrl});
  background-size: cover;
  background-position: center;
`;

export default Picture;
