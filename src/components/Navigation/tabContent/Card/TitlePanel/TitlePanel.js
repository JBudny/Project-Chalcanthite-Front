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
      <Tags>{`Tags: ${tags}`}</Tags>
      <EvenlyDistributed>
        <Author>
          {`By: `}
          <a href="/#">{author}</a>
        </Author>
        <Favourites
          tabIndex="0"
          role="button"
          onKeyDown={handleFavouritesKeyDown}
          onClick={handleFavouritesClick}
        >
          {favorites}
          <IconBox iconColor="#d1b03b">
            <i className={star ? "icon-star" : "icon-star-empty"} />
          </IconBox>
        </Favourites>
      </EvenlyDistributed>
    </TitlePanelWrapper>
  );
};

export default TitlePanel;
