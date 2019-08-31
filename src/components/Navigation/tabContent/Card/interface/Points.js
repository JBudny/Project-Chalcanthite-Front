// @flow
import React from "react";
import { PointsWrapper } from "../Card.styles";
import type { PointsProps } from "../Card.types";

const Points = (props: PointsProps) => {
  const { points } = props;

  return (
    <PointsWrapper>
      {points}
      {` Points`}
    </PointsWrapper>
  );
};

export default Points;
