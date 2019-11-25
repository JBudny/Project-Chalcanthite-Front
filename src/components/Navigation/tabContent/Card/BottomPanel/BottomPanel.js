// @flow
import '../../../../../utils/fontello/css/fontello.css';

import isEqual from 'lodash/isEqual';
import React, { useState } from 'react';

import IconBox from '../simpleElements/IconBox/IconBox.styles';
import BottomPanelWrapper from './BottomPanel.styles';

const BottomPanel = () => {
  const [likeHeart, setLikeHeart] = useState(false);
  const [dislikeHeart, setDislikeHeart] = useState(false);

  const switchLikeHeart = () => {
    if (dislikeHeart) setDislikeHeart(false);
    setLikeHeart(!likeHeart);
  };

  const switchDislikeHeart = () => {
    if (likeHeart) setLikeHeart(false);
    setDislikeHeart(!dislikeHeart);
  };

  const switchHeart = (action: boolean) => (action ? switchLikeHeart() : switchDislikeHeart());

  const handleClick = (action: boolean) => switchHeart(action);
  const handleKeyDown = (e: KeyboardEvent, action: boolean) =>
    isEqual(e.keyCode, 13) ? switchHeart(action) : null;

  return (
    <BottomPanelWrapper>
      <IconBox
        tabIndex="0"
        role="button"
        type="button"
        iconWidth="33%"
        iconSize="1.25rem"
        iconColor="#3d73bf"
        iconRightBorder="1px solid #A3BAC3"
        onKeyDown={e => handleKeyDown(e, true)}
        onClick={() => handleClick(true)}
      >
        <i className={likeHeart ? 'icon-heart-filled' : 'icon-heart'} />
      </IconBox>
      <IconBox
        tabIndex="0"
        role="button"
        type="button"
        iconWidth="33%"
        iconSize="1.25rem"
        iconColor="#3d73bf"
        iconLeftBorder="1px solid #A3BAC3"
        iconTransform="rotate(180deg)"
        onKeyDown={e => handleKeyDown(e, false)}
        onClick={() => handleClick(false)}
      >
        <i className={dislikeHeart ? 'icon-heart-filled' : 'icon-heart'} />
      </IconBox>
      <IconBox
        tabIndex="0"
        role="button"
        type="button"
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
