import React from "react";
import { create } from "react-test-renderer";
import { mount, shallow } from "enzyme";
import sinon from "sinon";
import "jest-styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import RetailCarousel from "../components/carousel/RetailCarousel";

library.add(faSearchPlus);

test("snapshot", () => {
  const c = create(<RetailCarousel />);
  expect(c.toJSON()).toMatchSnapshot();
});

describe("<RetailCarousel />", () => {
  it("renders with props", () => {
    const props = {
      images: [{ image: "url" }, { image: "url" }]
    };

    const wrapper = mount(<RetailCarousel images={props.images} />);

    expect(wrapper.props()).toEqual({
      images: [{ image: "url" }, { image: "url" }]
    });
  });
});
