import 'jest-styled-components';

import { cleanup, fireEvent } from '@testing-library/react';
import React from 'react';

import dummyInitialState from '../../../../../utils/testUtils/dummyData/dummyInitialState';
import dummyTitlePanelProps from '../../../../../utils/testUtils/dummyData/dummyTitlePanelProps';
import renderWithRedux from '../../../../../utils/testUtils/renderWithRedux';
import TitlePanel from './TitlePanel';

describe('TitlePanel', () => {
  afterEach(cleanup);

  const { tags, favorites, author, title } = dummyTitlePanelProps;
  let initialState = { ...dummyInitialState };

  test('should render an author link', () => {
    const { getByText } = renderWithRedux(
      <TitlePanel tags={tags} favorites={favorites} author={author} title={title} />,
      { initialState },
    );

    expect(getByText('Author:')).toBeInTheDocument();
  });

  test('should match the snapshot', () => {
    const { asFragment } = renderWithRedux(
      <TitlePanel tags={tags} favorites={favorites} author={author} title={title} />,
      { initialState },
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('should toggle icon an-star-empty to the icon-star after click on star button', () => {
    initialState = { ...initialState, auth: { auth: true } };

    const { getByRole } = renderWithRedux(
      <TitlePanel tags={tags} favorites={favorites} author={author} title={title} />,
      { initialState },
    );

    const starButton = getByRole('button');
    fireEvent.click(starButton);
    expect(starButton).toMatchSnapshot();
  });

  test('should toggle an icon-star to the an icon-star-empty after click on star button', () => {
    initialState = { ...initialState, auth: { auth: true } };

    const { getByRole } = renderWithRedux(
      <TitlePanel tags={tags} favorites={favorites} author={author} title={title} />,
      { initialState },
    );

    const starButton = getByRole('button');
    fireEvent.click(starButton);
    fireEvent.click(starButton);
    expect(starButton).toMatchSnapshot();
  });
});
