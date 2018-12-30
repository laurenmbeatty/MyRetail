import React from "react";
import { create } from "react-test-renderer";
import { render, cleanup } from "react-testing-library";
import "jest-styled-components";
import Highlights from "../components/highlights/Highlights";

afterEach(cleanup);

test("snapshot", () => {
  const c = create(<Highlights />);
  expect(c.toJSON()).toMatchSnapshot();
});

test("it renders with some props", () => {
  const props = {
    features: [
      "<strong>Wattage Output:</strong> 1100 Watts",
      "<strong>Number of Speeds:</strong> 3 ",
      "<strong>Capacity (volume):</strong> 72.0 Oz.",
      "<strong>Appliance Capabilities:</strong> Blends",
      "<strong>Includes:</strong> Travel Lid",
      "<strong>Material:</strong> Plastic",
      "<strong>Finish:</strong> Painted",
      "<strong>Metal Finish:</strong> Chrome",
      "<strong>Safety and Security Features:</strong> Non-Slip Base",
      "<strong>Care and Cleaning:</strong> Easy-To-Clean, Dishwasher Safe Parts"
    ]
  };

  const { getByText } = render(<Highlights highlights={props.features} />);

  const highlight = getByText(/Number of Speeds:/);

  expect(highlight).toBeDefined();
});
