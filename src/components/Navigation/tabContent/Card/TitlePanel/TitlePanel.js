// @flow
import "../../../../../utils/fontello/css/fontello.css";
import isEqual from "lodash/isEqual";
import React, { useState } from "react";
import type { TitlePanelProps } from "../Card.types";
import TitlePanelWrapper from "./TitlePanel.styles";
import Favourites from "../simpleElements/Favourites/Favourites.styles";
import EvenlyDistributed from "../simpleElements/EvenlyDistributed/EvenlyDistributed.styles";
import Author from "../simpleElements/Author/Author.styles";
import Title from "../simpleElements/Title/Title.styles";
import Tags from "../simpleElements/Tags/Tags.styles";
import IconBox from "../simpleElements/IconBox/IconBox.styles";
import {
  createLink,
  createLinksList
} from "../../../../../utils/createLinks/createLinks";

const TitlePanel = (props: TitlePanelProps) => {
  const [star, setStar] = useState(false);
  const { tags, favorites, author, title } = props;

  const handleFavouritesClick = () => setStar(!star);

  const handleFavouritesKeyDown = (e: KeyboardEvent) => {
    if (isEqual(e.keyCode, 13)) setStar(!star);
  };

  return (
    <TitlePanelWrapper>
      <Title>{title}</Title>
      <Tags id="tags">
        {`Tags: `}
        {createLinksList("/tag", tags)}
      </Tags>
      <EvenlyDistributed>
        <Author>
          {`By: `}
          {createLink("/user", author)}
        </Author>
        <IconBox
          iconColor="#d1b03b"
          tabIndex="0"
          role="button"
          type="button"
          onKeyDown={handleFavouritesKeyDown}
          onClick={handleFavouritesClick}
        >
          <Favourites>{favorites}</Favourites>
          <i className={star ? "icon-star" : "icon-star-empty"} />
        </IconBox>
      </EvenlyDistributed>
    </TitlePanelWrapper>
  );
};

export default TitlePanel;
