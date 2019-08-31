import React from "react";
import toJson from "enzyme-to-json";
import { mount } from "enzyme";
import CardContainer from "./CardContainer";
import dummyPost from "../../../../utils/dummyCardProps/dummyPost";

describe(`CardContainer`, () => {
  const CardContainerTree = mount(<CardContainer post={dummyPost} />);
  it(`should match the snapshot`, () => {
    expect(toJson(CardContainerTree)).toMatchSnapshot();
  });

  it(`props should match the snapshot`, () => {
    expect(CardContainerTree.props()).toMatchSnapshot();
  });
});
