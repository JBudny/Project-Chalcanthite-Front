import React from "react";
import toJson from "enzyme-to-json";
import { mount } from "enzyme";
import Card from "./Card";
import dummyProcessedPost from "../../../../utils/dummyCardProps/dummyPost";

describe(`Card`, () => {
  const cardTree = mount(<Card post={dummyProcessedPost} />);
  it(`should match the snapshot`, () => {
    expect(toJson(cardTree)).toMatchSnapshot();
  });

  it(`props should match the snapshot`, () => {
    expect(cardTree.props()).toMatchSnapshot();
  });
});
