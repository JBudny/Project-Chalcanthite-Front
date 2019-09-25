import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import dummyProcessedPost from '../../../../utils/dummyCardProps/dummyPost';
import Card from './Card';

describe('Card', () => {
  const cardTree = mount(<Card post={dummyProcessedPost} />);

  it('should match the snapshot', () => {
    expect(toJson(cardTree)).toMatchSnapshot();
  });

  it('props should match the snapshot', () => {
    expect(cardTree.props()).toMatchSnapshot();
  });
});
