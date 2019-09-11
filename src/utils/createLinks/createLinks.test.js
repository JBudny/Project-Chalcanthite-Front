import { createLink, createLinksList } from "./createLinks";
import dummyTitlePanelProps from "../dummyCardProps/dummyTitlePanelProps";

describe(`createLink function`, () => {
  const { author } = dummyTitlePanelProps;
  const linkElement = createLink("/user", author);

  it(`should match the snapshot`, () => {
    expect(linkElement).toMatchSnapshot();
  });
});

describe(`createLinksList function`, () => {
  const { tags } = dummyTitlePanelProps;
  const linksList = createLinksList("/tag", tags);

  it(`should match the snapshot`, () => {
    expect(linksList).toMatchSnapshot();
  });
});
