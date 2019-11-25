// @flow
import React from 'react';

import type { PointsProps } from '../Card.types';
import PointsWrapper from './Points.styles';

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
