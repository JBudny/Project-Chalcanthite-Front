import styled from "styled-components";

const Picture = styled.div`
  position: relative;
  min-height: 150px;
  margin: 0 0 5px 0;
  background: #1f2023;
  background: url(${props => props.thumbnailUrl});
  background-size: cover;
  background-position: center;
`;

export default Picture;
