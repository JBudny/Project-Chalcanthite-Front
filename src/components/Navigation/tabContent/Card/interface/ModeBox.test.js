import "jest-styled-components";
import React from "react";
import toJson from "enzyme-to-json";
import { mount } from "enzyme";
import dummyModeBoxProps from "../../../../../utils/dummyCardProps/dummyModeBoxProps";
import ModeBox from "./ModeBox";

describe(`ModeBox`, () => {
  const { thumbnail, shortDescription, actualCode } = dummyModeBoxProps;
  const modeBox = mount(
    <ModeBox
      thumbnail={thumbnail}
      shortDescription={shortDescription}
      actualCode={actualCode}
    />
  );

  it(`should match the snapshot`, () => {
    expect(toJson(modeBox)).toMatchSnapshot();
  });

  it(`props should match the snapshot`, () => {
    expect(modeBox.props()).toMatchSnapshot();
  });

  it(`should render code button with an actualCode inside`, () => {
    expect(modeBox.find('div[role="button"]').props()).toHaveProperty(
      "children",
      actualCode
    );
  });
});
