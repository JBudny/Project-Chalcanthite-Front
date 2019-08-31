// @flow
import "../../../../../utils/fontello/css/fontello.css";
import { isEqual } from "lodash/isEqual";
import React, { useState } from "react";
import type { TitlePanelProps } from "../Card.types";
import {
  TitlePanelWrapper,
  Title,
  Tags,
  InlineElements,
  UploadedBy,
  IconBox
} from "../Card.styles";

const TitlePanel = (props: TitlePanelProps) => {
  const [star, setStar] = useState(false);

  const handleFavouritesClick = () => setStar(!star);

  const handleFavouritesKeyDown = (e: KeyboardEvent) => {
    if (isEqual(e.keyCode, 13)) setStar(!star);
  };

  const { tags, favorites, author, title } = props;

  return (
    <TitlePanelWrapper>
      <Title>{title}</Title>
      <Tags>
        {`Tags: `}
        {tags}
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
    </TitlePanelWrapper>
  );
};

export default TitlePanel;
