import styled from 'styled-components';

const Code = styled.button`
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 6.87rem;
  height: 2.81rem;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
  background-color: rgba(208, 216, 232, 0.32);
  user-select: none;
  border: none;
  transition: transform 0.05s;
  &:active {
    transform: scale(0.96);
  }
  transition: transform 0.05s;
`;

export default Code;
