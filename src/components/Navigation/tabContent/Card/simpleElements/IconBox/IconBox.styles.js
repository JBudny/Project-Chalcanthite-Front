import styled from "styled-components";

const IconBox = styled.div`
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
