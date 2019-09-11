// @flow
import type { ComponentType } from "react";
import styled from "styled-components";

type Props = {
  iconRightBorder?: "1px solid #A3BAC3",
  iconLeftBorder?: "1px solid #A3BAC3",
  iconColor: "#3d73bf" | "#d1b03b"
};

const IconBox: ComponentType<Props> = styled.div`
  display: inline-block;
  width: ${props => props.iconWidth};
  border-right: ${props => props.iconRightBorder};
  border-left: ${props => props.iconLeftBorder};
  color: ${props => props.iconColor};
  font-size: ${props => props.iconSize};
  transform: ${props => props.iconTransfer};
  cursor: pointer;
`;

export default IconBox;
