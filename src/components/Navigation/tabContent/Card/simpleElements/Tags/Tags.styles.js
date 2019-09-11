import styled from "styled-components";

const Tags = styled.div`
  font-weight: 500;
  & > span {
    color: #636363;
  }
  a {
    font-weight: 400;
    color: #636363;
  }

  a:link {
    color: #636363;
    text-decoration: none;
  }
  a:visited {
    color: #9c9c9c;
  }
  a:hover {
    color: #9c9c9c;
    text-decoration: underline;
  }
`;

export default Tags;
