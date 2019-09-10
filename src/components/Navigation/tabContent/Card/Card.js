// @flow
import "../../../../utils/fontello/css/fontello.css";
import React from "react";
import BottomPanel from "./BottomPanel/BottomPanel";
import ModeBox from "./ModeBox/ModeBox";
import MorePanel from "./MorePanel/MorePanel";
import Points from "./Points/Points";
import TitlePanel from "./TitlePanel/TitlePanel";
import CardWrapper from "./Card.styles";
import type { Props } from "./Card.types";

const Card = (props: Props) => {
  const { post } = props;

  const {
    tags,
    thumbnail,
    favorites,
    points,
    author,
    title,
    shortDescription,
    actualCode
  } = post;

  return (
    <CardWrapper>
      <MorePanel />
      <TitlePanel
        tags={tags}
        favorites={favorites}
        author={author}
        title={title}
      />
      <ModeBox
        thumbnail={thumbnail}
        shortDescription={shortDescription}
        actualCode={actualCode}
      />
      <Points points={points} />
      <BottomPanel />
    </CardWrapper>
  );
};

export default Card;
