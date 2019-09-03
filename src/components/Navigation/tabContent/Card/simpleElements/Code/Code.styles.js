import styled from "styled-components";

const Code = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 110px;
  height: 45px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: rgba(208, 216, 232, 0.32);
  user-select: none;
  &:active {
    transform: scale(0.96);
  }
  transition: transform 0.05s;
`;

export default Code;
