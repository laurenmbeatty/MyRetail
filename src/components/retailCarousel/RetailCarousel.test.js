import React from "react";
import { create } from "react-test-renderer";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import RetailCarousel from "./RetailCarousel";

library.add(faSearchPlus);

afterEach(cleanup);

test("snapshot", () => {
  const c = create(<RetailCarousel />);
  expect(c.toJSON()).toMatchSnapshot();
});

it("renders with props", () => {
  const props = {
    images: [{ image: "url", index: 0 }, { image: "url", index: 1 }]
  };

  const { getByTestId } = render(<RetailCarousel images={props.images} />);

  const carousel = getByTestId("carousel-image-0");

  expect(carousel).toBeDefined();
});

test("fires handleimageclick", () => {
  const handleImageClick = jest.fn();
  const { container } = render(
    /* eslint-disable-next-line */
    <img
      src="http://target.scene7.com/is/image/Target/14263758_Alt06"
      onClick={handleImageClick}
      index="6"
      value="6"
      data-testid="carousel-image-6"
      alt="ninja-blender-7"
      className="chosen"
      aria-hidden="false"
    />
  );

  fireEvent.click(container.firstChild);
  expect(handleImageClick).toHaveBeenCalledTimes(1);
});
