import React from "react";
import { create } from "react-test-renderer";
import "jest-styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);
import Reviews from "../components/reviews/Reviews";

test("snapshot", () => {
  const c = create(<Reviews />);
  expect(c.toJSON()).toMatchSnapshot();
});

test("Parses date Correctly", () => {
  const c = create(<Reviews manipulateDate={() => {}} />);
  const instance = c.getInstance();
  const testDate = "Mon Mar 11 13:13:55 UTC 2013";

  expect(instance.manipulateDate(testDate)).toBe("Mar 11, 2013");
});
