import "jest-styled-components";
import React from "react";
import toJson from "enzyme-to-json";
import { mount } from "enzyme";
import MorePanel from "./MorePanel";

describe(`MorePanel`, () => {
  const morePanelTree = mount(<MorePanel />);

  it(`should match the snapshot`, () => {
    expect(toJson(morePanelTree)).toMatchSnapshot();
  });

  it(`props should match the snapshot`, () => {
    expect(morePanelTree.props()).toMatchSnapshot();
  });

  it(`should render ellipsis button`, () => {
    expect(morePanelTree.find("i.icon-ellipsis").length).toBe(1);
  });
});
