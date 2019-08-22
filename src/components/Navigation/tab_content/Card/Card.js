// @flow
import "../../../../utils/fontello/css/fontello.css";
import { isEqual } from "lodash";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  Wrapper,
  MorePanel,
  TitlePanel,
  Title,
  Tags,
  InlineElements,
  UploadedBy,
  ModeBox,
  Text,
  Picture,
  Code,
  Points,
  BottomPanel,
  IconBox
} from "./Card.styles";

type Post = {
  tags: Array<string>,
  thumbnail: string,
  favorites: number,
  points: number,
  author: string,
  title: string,
  shortDescription: string,
  actualCode: string,
  _id: string
};

type Props = {
  post: Post
};

const Card = (props: Props) => {
  const { post } = props;
  const [star, setStar] = useState(false);
  const [likeHeart, setLikeHeart] = useState(false);
  const [dislikeHeart, setDislikeHeart] = useState(false);
  const { tags, thumbnail, favorites, points, author, title, shortDescription, actualCode } = post;
  const tagsWithCommas = tags.join(", ");

  const handleFavouritesKeyDown = e => {
    if (isEqual(e.keyCode, 13)) setStar(!star);
  };
  const handleFavouritesClick = () => setStar(!star);

  const handleLikeKeyDown = e => {
    if (isEqual(e.keyCode, 13)) {
      if (dislikeHeart) setDislikeHeart(!dislikeHeart);
      setLikeHeart(!likeHeart);
    }
  };
  const handleLikeClick = () => {
    if (dislikeHeart) setDislikeHeart(!dislikeHeart);
    setLikeHeart(!likeHeart);
  };

  const handleDislikeKeyDown = e => {
    if (isEqual(e.keyCode, 13)) {
      if (likeHeart) setLikeHeart(!likeHeart);
      setDislikeHeart(!dislikeHeart);
    }
  };
  const handleDislikeClick = () => {
    if (likeHeart) setLikeHeart(!likeHeart);
    setDislikeHeart(!dislikeHeart);
  };

  return (
    <Wrapper>
      <MorePanel>
        <IconBox tabIndex="0" role="button" iconColor="#1F2023" iconSize="1.25rem">
          <i className="icon-ellipsis" />
        </IconBox>
      </MorePanel>

      <TitlePanel>
        <Title>{title}</Title>
        <Tags>
          {`Tags: `}
          {tagsWithCommas}
        </Tags>
        <InlineElements>
          <UploadedBy>
            {`By: `}
            <a href="/#">{author}</a>
          </UploadedBy>
          <div
            tabIndex="0"
            role="button"
            onKeyDown={handleFavouritesKeyDown}
            onClick={handleFavouritesClick}
          >
            {favorites}
            <IconBox iconColor="#d1b03b">
              <i className={star ? "icon-star" : "icon-star-empty"} />
            </IconBox>
          </div>
        </InlineElements>
      </TitlePanel>

      <ModeBox>
        <figure>
          <Picture thumbnailUrl={thumbnail} alt="Mode picture">
            <CopyToClipboard text={actualCode}>
              <Code tabIndex="0" role="button">
                {actualCode}
              </Code>
            </CopyToClipboard>
          </Picture>
          <figcaption>
            <Text>{shortDescription}</Text>
          </figcaption>
        </figure>
      </ModeBox>

      <Points>
        {points}
        {` Points`}
      </Points>
      <BottomPanel>
        <IconBox
          tabIndex="0"
          role="button"
          iconWidth="33%"
          iconSize="1.25rem"
          iconColor="#3d73bf"
          iconRightBorder="1px solid #A3BAC3"
          onKeyDown={handleLikeKeyDown}
          onClick={handleLikeClick}
        >
          <i className={likeHeart ? "icon-heart-filled" : "icon-heart"} />
        </IconBox>
        <IconBox
          tabIndex="0"
          role="button"
          iconWidth="33%"
          iconSize="1.25rem"
          iconColor="#3d73bf"
          iconLeftBorder="1px solid #A3BAC3"
          iconTransfer="rotate(180deg)"
          onKeyDown={handleDislikeKeyDown}
          onClick={handleDislikeClick}
        >
          <i className={dislikeHeart ? "icon-heart-filled" : "icon-heart"} />
        </IconBox>
        <IconBox tabIndex="0" role="button" iconWidth="33%" iconSize="1.25rem" iconColor="#3d73bf">
          <i className="icon-comment" />
        </IconBox>
      </BottomPanel>
    </Wrapper>
  );
};

export default Card;
