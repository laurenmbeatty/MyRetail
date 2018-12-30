import React from "react";
import { create } from "react-test-renderer";
import { render, cleanup } from "react-testing-library";
import "jest-styled-components";
import Order from "../components/order/Order";

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

test("renders the pick up in store button and add to cart button if available equals 0", () => {
  const { getByText } = render(<Order available="0" />);

  const pickUpButton = getByText(/PICK UP IN STORE/);
  const addToCartButton = getByText(/ADD TO CART/);

  expect(pickUpButton).toBeDefined();
  expect(addToCartButton).toBeDefined();
});
