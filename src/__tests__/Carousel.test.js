import React from "react";
import { create } from "react-test-renderer";
import RetailCarousel from "../components/carousel/RetailCarousel";

test("snapshot", () => {
  const c = create(<RetailCarousel />);
  expect(c.toJSON()).toMatchSnapshot();
});
