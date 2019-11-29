import 'jest-styled-components';

import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import dummyPointsProps from '../../../../../utils/testUtils/dummyData/dummyPointsProps';
import Points from './Points';

describe('Points', () => {
  const { points } = dummyPointsProps;
  const pointsTree = mount(<Points points={points} />);

  it('should match the snapshot', () => {
    expect(toJson(pointsTree)).toMatchSnapshot();
  });

  it('props should match the snapshot', () => {
    expect(pointsTree.props()).toMatchSnapshot();
  });
});
