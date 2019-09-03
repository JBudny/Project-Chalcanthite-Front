import "jest-styled-components";
import React from "react";
import toJson from "enzyme-to-json";
import { mount } from "enzyme";
import dummyPointsProps from "../../../../../utils/dummyCardProps/dummyPointsProps";
import Points from "./Points";

describe(`Points`, () => {
  const { points } = dummyPointsProps;
  const pointsTree = mount(<Points points={points} />);

  it(`should match the snapshot`, () => {
    expect(toJson(pointsTree)).toMatchSnapshot();
  });

  it(`props should match the snapshot`, () => {
    expect(pointsTree.props()).toMatchSnapshot();
  });
});
