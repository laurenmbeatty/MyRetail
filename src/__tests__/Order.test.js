import React from "react";
import { create } from "react-test-renderer";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Order from "../components/order/Order";

library.add(faMinusCircle, faPlusCircle);

afterEach(cleanup);

test("snapshot", () => {
  const c = create(<Order />);
  expect(c.toJSON()).toMatchSnapshot();
});

test("increments when increment function is called", () => {
  const c = create(<Order increment={() => {}} decrement={() => {}} />);
  const instance = c.getInstance();

  expect(instance.state.quantity).toBe(1);
  instance.increment();
  expect(instance.state.quantity).toBe(2);
  instance.decrement();
  instance.decrement();
  instance.decrement();
  expect(instance.state.quantity).toBe(0);
});

test("Quantity does not go below zero when decrement is called", () => {
  const c = create(<Order increment={() => {}} decrement={() => {}} />);
  const instance = c.getInstance();

  expect(instance.state.quantity).toBe(1);
  instance.decrement();
  instance.decrement();
  instance.decrement();
  expect(instance.state.quantity).toBe(0);
});

test("fires increment", () => {
  const increment = jest.fn();
  const { container } = render(
    <svg
      onClick={increment}
      aria-hidden="true"
      data-prefix="fas"
      data-icon="plus-circle"
      className="svg-inline--fa fa-plus-circle fa-w-16 increment-button"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
      />
    </svg>
  );
  fireEvent.click(container.firstChild);
  expect(increment).toHaveBeenCalledTimes(1);
});

test("renders the pick up in store button and add to cart button if available equals 0", () => {
  const { getByText } = render(<Order available="0" />);

  const pickUpButton = getByText(/PICK UP IN STORE/);
  const addToCartButton = getByText(/ADD TO CART/);

  expect(pickUpButton).toBeDefined();
  expect(addToCartButton).toBeDefined();
});
