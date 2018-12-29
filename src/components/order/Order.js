import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Styled from "./styles";
class Order extends React.Component {
  state = {
    quantity: 1
  };

  decrement = () => {
    this.state.quantity === 0
      ? this.setState({
          quantity: 0
        })
      : this.setState({
          quantity: this.state.quantity - 1
        });
  };

  increment = () => {
    this.setState({
      quantity: this.state.quantity + 1
    });
  };

  render() {
    const { quantity } = this.state;
    const { available } = this.props;
    return (
      <Styled.Order>
        <Styled.OrderForm>
          <Styled.Quantity>
            <label className="quantity-label" htmlFor="quantity">
              quantity:
            </label>
            <div className="counter-container">
              <FontAwesomeIcon
                icon="minus-circle"
                onClick={this.decrement}
                className="decrement-button"
              />
              <span className="quantity">{quantity}</span>
              <FontAwesomeIcon
                icon="plus-circle"
                onClick={this.increment}
                className="increment-button"
              />
            </div>
          </Styled.Quantity>
          <Styled.OrderButtonContainer>
            {available === "0" || available === "1" ? (
              <button className="pick-up">PICK UP IN STORE</button>
            ) : null}
            {available === "0" || available === "2" ? (
              <button className="add-to-cart">ADD TO CART</button>
            ) : null}
          </Styled.OrderButtonContainer>
          {available === "0" || available === "1" ? (
            <a
              href="https://www.target.com/s?searchTerm=ninja+professional+1000+watt+blender"
              rel="noopener noreferrer"
              target="_blank"
              className="find-in-store"
            >
              find in a store
            </a>
          ) : null}
        </Styled.OrderForm>
        <Styled.Returns>
          <p className="returns-label">returns</p>
          <hr />
          <p className="returns-description">
            This item must be returned within 30 days of the ship date. See
            return policy for details. Prices, promotions, styles and
            availability may vary by store and online.
          </p>
        </Styled.Returns>
        <Styled.SocialButtonContainer>
          <button className="social-button">ADD TO REGISTRY</button>
          <button className="social-button">ADD TO LIST</button>
          <button className="social-button">SHARE</button>
        </Styled.SocialButtonContainer>
      </Styled.Order>
    );
  }
}
export default Order;
