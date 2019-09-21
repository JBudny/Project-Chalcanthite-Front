// @flow
import '../../../../../utils/fontello/css/fontello.css';

import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import type { ModeBoxProps } from '../Card.types';
import Code from '../simpleElements/Code/Code.styles';
import Picture from '../simpleElements/Picture/Picture.styles';
import Text from '../simpleElements/Text/Text.styles';
import ModeBoxWrapper from './ModeBox.styles';

const ModeBox = (props: ModeBoxProps) => {
  const { thumbnail, actualCode, shortDescription } = props;

  return (
    <ModeBoxWrapper>
      <figure>
        <Picture thumbnailUrl={thumbnail} alt="Mode picture">
          <CopyToClipboard text={actualCode}>
            <Code tabIndex="0" type="button">
              {actualCode}
            </Code>
          </CopyToClipboard>
        </Picture>
        <figcaption>
          <Text>{shortDescription}</Text>
        </figcaption>
      </figure>
    </ModeBoxWrapper>
  );
};

export default ModeBox;
