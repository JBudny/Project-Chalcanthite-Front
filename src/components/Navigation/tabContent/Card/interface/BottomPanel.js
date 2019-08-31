// @flow
import "../../../../../utils/fontello/css/fontello.css";
import { isEqual } from "lodash/isEqual";
import React, { useState } from "react";
import { BottomPanelWrapper, IconBox } from "../Card.styles";

const BottomPanel = () => {
  const [likeHeart, setLikeHeart] = useState(false);
  const [dislikeHeart, setDislikeHeart] = useState(false);

  const handleLikeClick = () => {
    if (dislikeHeart) setDislikeHeart(!dislikeHeart);
    setLikeHeart(!likeHeart);
  };
  const handleLikeKeyDown = (e: KeyboardEvent) => {
    if (isEqual(e.keyCode, 13)) {
      if (dislikeHeart) setDislikeHeart(!dislikeHeart);
      setLikeHeart(!likeHeart);
    }
  };

  const handleDislikeClick = () => {
    if (likeHeart) setLikeHeart(!likeHeart);
    setDislikeHeart(!dislikeHeart);
  };
  const handleDislikeKeyDown = (e: KeyboardEvent) => {
    if (isEqual(e.keyCode, 13)) {
      if (likeHeart) setLikeHeart(!likeHeart);
      setDislikeHeart(!dislikeHeart);
    }
  };

  return (
    <BottomPanelWrapper>
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
      <IconBox
        tabIndex="0"
        role="button"
        iconWidth="33%"
        iconSize="1.25rem"
        iconColor="#3d73bf"
      >
        <i className="icon-comment" />
      </IconBox>
    </BottomPanelWrapper>
  );
};

export default BottomPanel;
