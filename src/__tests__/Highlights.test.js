import React from "react";
import { create } from "react-test-renderer";
import Highlights from "../components/highlights/Highlights";

test("snapshot", () => {
  const c = create(<Highlights />);
  expect(c.toJSON()).toMatchSnapshot();
});
