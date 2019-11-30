// @flow

import React from 'react';

import type { TextProps } from '../../LoginModal.types';
import TextWrapper from './Text.styles';

const Text = (props: TextProps) => {
  const { text } = props;

  return <TextWrapper>{text}</TextWrapper>;
};

export default Text;
