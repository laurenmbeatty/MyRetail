import React from "react";
import { create } from "react-test-renderer";
import Offers from "../components/offers/Offers";

test("snapshot", () => {
  const c = create(<Offers />);
  expect(c.toJSON()).toMatchSnapshot();
});
