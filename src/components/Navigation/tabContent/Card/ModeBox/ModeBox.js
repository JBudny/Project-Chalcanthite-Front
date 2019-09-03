// @flow
import "../../../../../utils/fontello/css/fontello.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React from "react";
import Picture from "../simpleElements/Picture/Picture.styles";
import ModeBoxWrapper from "./ModeBox.styles";
import Text from "../simpleElements/Text/Text.styles";
import Code from "../simpleElements/Code/Code.styles";
import type { ModeBoxProps } from "../Card.types";

const ModeBox = (props: ModeBoxProps) => {
  const { thumbnail, actualCode, shortDescription } = props;

  return (
    <ModeBoxWrapper>
      <figure>
        <Picture thumbnailUrl={thumbnail} alt="Mode picture">
          <CopyToClipboard text={actualCode}>
            <Code tabIndex="0" role="button">
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
