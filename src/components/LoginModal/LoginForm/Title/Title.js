// @flow

import React from 'react';

import type { TitleProps } from '../../LoginModal.types';
import TitleWrapper from './Title.styles';

const Title = (props: TitleProps) => {
  const { title } = props;

  return <TitleWrapper id="Login">{title}</TitleWrapper>;
};

export default Title;
