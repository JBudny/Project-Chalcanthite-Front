// @flow
import React from "react";
import Card from "./Card";
import type { Props } from "./Card.types";

const CardContainer = (props: Props) => {
  const { post } = props;

  const processedPost = JSON.parse(JSON.stringify(post));
  processedPost.tags = processedPost.tags.join(", ");

  return <Card post={processedPost} />;
};

export default CardContainer;
