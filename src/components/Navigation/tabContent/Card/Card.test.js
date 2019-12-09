import 'jest-styled-components';

import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { IntlProvider } from 'react-intl';

import messagesEn from '../../../../translations/en.json';
import dummyProcessedPost from '../../../../utils/testUtils/dummyData/dummyPost';
import Card from './Card';

describe('Card', () => {
  const language = 'en';
  const messages = {
    en: messagesEn,
  };

  const cardTree = mount(
    <IntlProvider locale={language} messages={messages[language]}>
      <Card post={dummyProcessedPost} />
    </IntlProvider>,
  );

  it('should match the snapshot', () => {
    expect(toJson(cardTree)).toMatchSnapshot();
  });

  it('props should match the snapshot', () => {
    expect(cardTree.props()).toMatchSnapshot();
  });
});
