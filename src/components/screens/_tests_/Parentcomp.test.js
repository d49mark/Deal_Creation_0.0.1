// __tests__/Intro-test.js
import React from "react";
import { ParentComp } from "../";

import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<ParentComp />).toJSON();
  expect(tree).toMatchSnapshot();
});
