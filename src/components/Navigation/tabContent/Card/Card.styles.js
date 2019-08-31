import styled from "styled-components";

export const CardWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");
  font-family: "Roboto", sans-serif;
  padding: 0 0 0.4rem 0;
  color: #1f2023;
  background: #d0d8e8;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 0.9rem;
`;

export const MorePanelWrapper = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: flex-end;
`;

export const TitlePanelWrapper = styled.div`
  margin: 0 0.4rem;
`;

export const Title = styled.div`
  text-transform: uppercase;
  font-weight: 500;
  color: #4472ca;
  font-size: 18px;
`;

export const Tags = styled.div`
  font-weight: 500;
`;

export const InlineElements = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UploadedBy = styled.div`
  font-weight: 500;
  a:link {
    color: #4472ca;
    text-decoration: none;
  }
  a:visited {
    color: #9999ca;
  }
  a:hover {
    color: #9999ca;
    text-decoration: underline;
  }
`;

export const Favourites = styled.div``;

export const ModeBoxWrapper = styled.div`
  margin: 5px 0;
`;

export const Text = styled.div`
  margin: 0 0.4rem;
`;

export const Picture = styled.div`
  position: relative;
  min-height: 150px;
  margin: 0 0 5px 0;
  background: #1f2023;
  background: url(${props => props.thumbnailUrl});
  background-size: cover;
  background-position: center;
`;

export const Code = styled.div`
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

export const PointsWrapper = styled.div`
  margin: 0 0.4rem;
`;

export const BottomPanelWrapper = styled.div`
  text-align: center;
  font-size: 20px;
  margin: 0 0.4rem;
`;

export const IconBox = styled.div`
  display: inline-block;
  width: ${props => props.iconWidth};
  border-right: ${props => props.iconRightBorder};
  border-left: ${props => props.iconLeftBorder};
  color: ${props => props.iconColor};
  font-size: ${props => props.iconSize};
  transform: ${props => props.iconTransfer};
  cursor: pointer;
`;
