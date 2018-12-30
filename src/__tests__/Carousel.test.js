import React from "react";
import { create } from "react-test-renderer";
import { mount } from "enzyme";
import { render, cleanup, fireEvent } from "react-testing-library";
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

// afterEach(cleanup);

// test("fires handleimageclick", () => {
//   const handleImageClick = jest.fn();
//   const props = {
//     images: [{ image: "url-0", index: 0 }, { image: "url-1", index: 1 }]
//   };
//   const { getByTestId } = render(
//     <RetailCarousel {...props} onClick={handleImageClick} slideIndex={0} />
//   );

//   fireEvent.click(getByTestId(".carousel-image-0"));
//   expect(handleImageClick).toHaveBeenCalledTimes(1);
// });
