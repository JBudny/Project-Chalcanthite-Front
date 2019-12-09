import 'jest-styled-components';

import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { IntlProvider } from 'react-intl';

import messagesEn from '../../../../../translations/en.json';
import dummyTitlePanelProps from '../../../../../utils/testUtils/dummyData/dummyTitlePanelProps';
import TitlePanel from './TitlePanel';

describe('TitlePanel', () => {
  const language = 'en';
  const messages = {
    en: messagesEn,
  };

  const { tags, favorites, author, title } = dummyTitlePanelProps;

  let titlePanelTree;

  beforeEach(() => {
    titlePanelTree = mount(
      <IntlProvider locale={language} messages={messages[language]}>
        <TitlePanel tags={tags} favorites={favorites} author={author} title={title} />
      </IntlProvider>,
    );
  });

  it('should match the snapshot', () => {
    expect(toJson(titlePanelTree)).toMatchSnapshot();
  });

  it('props should match the snapshot', () => {
    expect(titlePanelTree.props()).toMatchSnapshot();
  });

  it('should render author link', () => {
    expect(
      titlePanelTree
        .find('div')
        .at(4)
        .find('a')
        .props(),
    ).toHaveProperty('children', author);
  });

  it("should toggle 'icon-star-empty' class to 'icon-star' after click on star button", () => {
    titlePanelTree.find('i.icon-star-empty').simulate('click');
    expect(titlePanelTree.find('i.icon-star').props()).toMatchSnapshot();
  });

  it("should toggle 'icon-star' class to 'icon-star-empty' after click on star button", () => {
    titlePanelTree.find('i.icon-star-empty').simulate('click');
    titlePanelTree.find('i.icon-star').simulate('click');
    expect(titlePanelTree.find('i.icon-star-empty').props()).toMatchSnapshot();
  });
});
