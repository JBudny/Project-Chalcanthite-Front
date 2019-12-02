import 'jest-styled-components';

import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { IntlProvider } from 'react-intl';

import messagesEn from '../../../../../translations/en.json';
import dummyPointsProps from '../../../../../utils/testUtils/dummyData/dummyPointsProps';
import Points from './Points';

describe('Points', () => {
  const language = 'en';
  const messages = {
    en: messagesEn,
  };

  const { points } = dummyPointsProps;
  const pointsTree = mount(
    <IntlProvider locale={language} messages={messages[language]}>
      <Points points={points} />
    </IntlProvider>,
  );

  it('should match the snapshot', () => {
    expect(toJson(pointsTree)).toMatchSnapshot();
  });

  it('props should match the snapshot', () => {
    expect(pointsTree.props()).toMatchSnapshot();
  });
});
