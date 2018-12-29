import React from "react";
import { create } from "react-test-renderer";
import Order from "../components/order/Order";

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
