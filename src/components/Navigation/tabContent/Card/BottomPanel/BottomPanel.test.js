import 'jest-styled-components';

import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import BottomPanel from './BottomPanel';

describe('BottomPanel', () => {
  let bottomPanelTree;
  const selectedNodesEqualTo = (sel, val) => expect(bottomPanelTree.find(sel).length).toBe(val);

  beforeEach(() => (bottomPanelTree = mount(<BottomPanel />)));

  it('should match the snapshot', () => {
    expect(toJson(bottomPanelTree)).toMatchSnapshot();
  });

  it('props should match the snapshot', () => {
    expect(bottomPanelTree.props()).toMatchSnapshot();
  });

  it("should initially render two buttons with 'icon-heart' style", () => {
    selectedNodesEqualTo('i.icon-heart-filled', 0);
    selectedNodesEqualTo('i.icon-heart', 2);
  });

  describe(': clicked like button ', () => {
    it("should toggle 'icon-heart' class to 'icon-heart-filled'", () => {
      bottomPanelTree
        .find('i.icon-heart')
        .at(0)
        .simulate('click');
      selectedNodesEqualTo('i.icon-heart-filled', 1);
      selectedNodesEqualTo('i.icon-heart', 1);
    });

    it("Should toggle 'icon-heart-filled' class to 'icon-heart'", () => {
      bottomPanelTree
        .find('i.icon-heart')
        .at(0)
        .simulate('click');
      bottomPanelTree
        .find('i.icon-heart-filled')
        .at(0)
        .simulate('click');
      selectedNodesEqualTo('i.icon-heart-filled', 0);
      selectedNodesEqualTo('i.icon-heart', 2);
    });

    it("should toggle dislike button 'icon-heart-filled' class to 'icon-heart'", () => {
      bottomPanelTree
        .find('i.icon-heart')
        .at(1)
        .simulate('click');
      bottomPanelTree
        .find('i.icon-heart')
        .at(0)
        .simulate('click');
      selectedNodesEqualTo('i.icon-heart-filled', 1);
      selectedNodesEqualTo('i.icon-heart', 1);
    });
  });

  describe(': clicked dislike button ', () => {
    beforeEach(() => (bottomPanelTree = mount(<BottomPanel />)));

    it("should toggle 'icon-heart' class to 'icon-heart-filled'", () => {
      bottomPanelTree
        .find('i.icon-heart')
        .at(1)
        .simulate('click');
      selectedNodesEqualTo('i.icon-heart-filled', 1);
      selectedNodesEqualTo('i.icon-heart', 1);
    });

    it("should toggle 'icon-heart-filled' class to 'icon-heart'", () => {
      bottomPanelTree
        .find('i.icon-heart')
        .at(1)
        .simulate('click');
      bottomPanelTree
        .find('i.icon-heart-filled')
        .at(0)
        .simulate('click');
      selectedNodesEqualTo('i.icon-heart-filled', 0);
      selectedNodesEqualTo('i.icon-heart', 2);
    });

    it("should toggle like button 'icon-heart-filled' class to 'icon-heart'", () => {
      bottomPanelTree
        .find('i.icon-heart')
        .at(0)
        .simulate('click');
      bottomPanelTree
        .find('i.icon-heart')
        .at(0)
        .simulate('click');
      selectedNodesEqualTo('i.icon-heart-filled', 1);
      selectedNodesEqualTo('i.icon-heart', 1);
    });
  });

  it('should render comment button', () => {
    expect(bottomPanelTree.find('i.icon-comment').length).toBe(1);
  });
});
