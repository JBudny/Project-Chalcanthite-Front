import { mount } from "enzyme";
import React from "react";
import Card from "./Card";

const dummyPost = {
  tags: [
    `nostrud`,
    `ex nulla`,
    `ea`,
    `sit`,
    `nostrud`,
    `esse`,
    `ad`,
    `reprehenderit mollit`,
    `labore`
  ],
  thumbnail: `/path/to/default.img`,
  favorites: 746,
  points: 9894,
  gallery: [],
  _id: `5d5c4546a6bab91d887208f6`,
  createdAt: `2019-02-14T00:14:55.048Z`,
  author: `5d5c4546a6bab91d887208f7`,
  title: `id quis consectetur veniam nisi magna duis fugiat`,
  shortDescription: `Culpa exercitation irure consectetur irure cillum
      incididunt quis veniam Lorem officia exercitation amet
      deserunt enim. Velit Lorem aute proident.`,
  actualCode: `htXjj`
};

describe(`Card Component`, () => {
  let card = mount(<Card post={dummyPost} />);
  const selectedNodesEqualTo = (sel, val) => expect(card.find(sel).length).toBe(val);

  it(`should match the snapshot`, () => {
    expect(card.html()).toMatchSnapshot();
  });

  it(`props should match the snapshot`, () => {
    expect(card.props()).toMatchSnapshot();
  });

  it(`should render ellipsis button`, () => {
    expect(card.find("i.icon-ellipsis").length).toBe(1);
  });

  it(`should render author link`, () => {
    expect(card.find("a").props()).toHaveProperty("children", dummyPost.author);
  });

  it(`should toggle 'icon-star-empty' class to 'icon-star' after click on star button`, () => {
    card.find("i.icon-star-empty").simulate("click");
    expect(card.find("i.icon-star").props()).toMatchSnapshot();
  });

  it(`should toggle 'icon-star' class to 'icon-star-empty' after click on star button`, () => {
    card.find("i.icon-star").simulate("click");
    expect(card.find("i.icon-star-empty").props()).toMatchSnapshot();
  });

  it(`should render code button with an actualCode inside`, () => {
    expect(
      card
        .find('div[role="button"]')
        .at(2)
        .props()
    ).toHaveProperty("children", dummyPost.actualCode);
  });

  it(`should initially render two buttons with 'icon-heart' style`, () => {
    selectedNodesEqualTo("i.icon-heart-filled", 0);
    selectedNodesEqualTo("i.icon-heart", 2);
  });

  describe(`Clicked like button `, () => {
    beforeEach(() => (card = mount(<Card post={dummyPost} />)));

    it(`should toggle 'icon-heart' class to 'icon-heart-filled'`, () => {
      card
        .find("i.icon-heart")
        .at(0)
        .simulate("click");
      selectedNodesEqualTo("i.icon-heart-filled", 1);
      selectedNodesEqualTo("i.icon-heart", 1);
    });

    it(`Should toggle 'icon-heart-filled' class to 'icon-heart'`, () => {
      card
        .find("i.icon-heart")
        .at(0)
        .simulate("click");
      card
        .find("i.icon-heart-filled")
        .at(0)
        .simulate("click");
      selectedNodesEqualTo("i.icon-heart-filled", 0);
      selectedNodesEqualTo("i.icon-heart", 2);
    });

    it(`should toggle dislike button 'icon-heart-filled' class to 'icon-heart'`, () => {
      card
        .find("i.icon-heart")
        .at(1)
        .simulate("click");
      card
        .find("i.icon-heart")
        .at(0)
        .simulate("click");
      selectedNodesEqualTo("i.icon-heart-filled", 1);
      selectedNodesEqualTo("i.icon-heart", 1);
    });
  });

  describe(`Clicked dislike button `, () => {
    beforeEach(() => (card = mount(<Card post={dummyPost} />)));

    it(`should toggle 'icon-heart' class to 'icon-heart-filled'`, () => {
      card
        .find("i.icon-heart")
        .at(1)
        .simulate("click");
      selectedNodesEqualTo("i.icon-heart-filled", 1);
      selectedNodesEqualTo("i.icon-heart", 1);
    });

    it(`should toggle 'icon-heart-filled' class to 'icon-heart'`, () => {
      card
        .find("i.icon-heart")
        .at(1)
        .simulate("click");
      card
        .find("i.icon-heart-filled")
        .at(0)
        .simulate("click");
      selectedNodesEqualTo("i.icon-heart-filled", 0);
      selectedNodesEqualTo("i.icon-heart", 2);
    });

    it(`should toggle like button 'icon-heart-filled' class to 'icon-heart'`, () => {
      card
        .find("i.icon-heart")
        .at(0)
        .simulate("click");
      card
        .find("i.icon-heart")
        .at(0)
        .simulate("click");
      selectedNodesEqualTo("i.icon-heart-filled", 1);
      selectedNodesEqualTo("i.icon-heart", 1);
    });
  });

  it(`should render comment button`, () => {
    expect(card.find("i.icon-comment").length).toBe(1);
  });
});
