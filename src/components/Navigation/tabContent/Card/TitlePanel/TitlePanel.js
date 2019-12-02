// @flow
import '../../../../../utils/fontello/css/fontello.css';

import isEqual from 'lodash/isEqual';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { createLink, createLinksList } from '../../../../../utils/createLinks/createLinks';
import type { TitlePanelProps } from '../Card.types';
import Author from '../simpleElements/Author/Author.styles';
import EvenlyDistributed from '../simpleElements/EvenlyDistributed/EvenlyDistributed.styles';
import Favourites from '../simpleElements/Favourites/Favourites.styles';
import IconBox from '../simpleElements/IconBox/IconBox.styles';
import Tags from '../simpleElements/Tags/Tags.styles';
import Title from '../simpleElements/Title/Title.styles';
import TitlePanelWrapper from './TitlePanel.styles';

const TitlePanel = (props: TitlePanelProps) => {
  const [star, setStar] = useState(false);
  const { tags, favorites, author, title } = props;

  const handleFavouritesClick = () => setStar(!star);

  const handleFavouritesKeyDown = (e: KeyboardEvent) => {
    if (isEqual(e.keyCode, 13)) setStar(!star);
  };

  return (
    <TitlePanelWrapper>
      <Title>{title}</Title>
      <Tags id="tags">
        <FormattedMessage
          id="card.tags"
          description="Tags describing the mode"
          defaultMessage="Tags: "
        />
        {createLinksList('/tag', tags)}
      </Tags>
      <EvenlyDistributed>
        <Author>
          <FormattedMessage
            id="card.author"
            description="Author of the mode"
            defaultMessage="Author: "
          />
          {createLink('/user', author)}
        </Author>
        <Favourites>
          {favorites}
          <IconBox
            iconColor="#d1b03b"
            tabIndex="0"
            role="button"
            type="button"
            onKeyDown={handleFavouritesKeyDown}
            onClick={handleFavouritesClick}
          >
            <i className={star ? 'icon-star' : 'icon-star-empty'} />
          </IconBox>
        </Favourites>
      </EvenlyDistributed>
    </TitlePanelWrapper>
  );
};

export default TitlePanel;
