import React from "react";
import { shallow } from "enzyme";
import Navigation from "../components/Navigation/Navigation";

it("renders correctly", () => {
  const tree = shallow(<Navigation />);
  expect(tree).toMatchSnapshot();
});
