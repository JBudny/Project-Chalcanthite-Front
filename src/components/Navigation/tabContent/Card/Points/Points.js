// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';

import type { PointsProps } from '../Card.types';
import PointsWrapper from './Points.styles';

const Points = (props: PointsProps) => {
  const { points } = props;

  return (
    <PointsWrapper>
      {points}
      <FormattedMessage id="card.points" description="Points collected" defaultMessage=" Points" />
    </PointsWrapper>
  );
};

export default Points;
