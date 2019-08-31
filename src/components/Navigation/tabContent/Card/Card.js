// @flow
import "../../../../utils/fontello/css/fontello.css";
import React from "react";
import BottomPanel from "./interface/BottomPanel";
import ModeBox from "./interface/ModeBox";
import MorePanel from "./interface/MorePanel";
import Points from "./interface/Points";
import TitlePanel from "./interface/TitlePanel";
import { CardWrapper } from "./Card.styles";
import type { ProcessedProps } from "./Card.types";

const Card = (props: ProcessedProps) => {
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
