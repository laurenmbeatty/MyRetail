import styled from "styled-components";

export const Order = styled.section`
  color: #ccc;
  margin-top: 30px;
  width: 100%;

  .find-in-store {
    color: #000;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.17;
    text-decoration: none;
    display: inline-block;
    width: 50%;
    text-align: center;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
`;

export const OrderForm = styled.form`
  width: 100%;
`;

export const Quantity = styled.div`
  border: 1px solid #d3d2d2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 8px 5px 11px;
  width: 45%;
  .quantity-label {
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
  .counter-container {
    display: flex;
    align-items: center;
  }
  .quantity {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    color: #000;
    padding-right: 13px;
  }
  svg {
    font-size: 30px;
    cursor: pointer;
  }
  .decrement-button {
    padding-right: 13px;
  }
`;

export const OrderButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 31px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
  button {
    padding-top: 10px;
    padding-bottom: 10px;
    width: 49%;
    background-image: none;
    border-radius: 3px;
    box-shadow: 0px 1px 2px 0 rgba(0, 0, 0, 0.5);
    font-family: Helvetica, sans-serif;
    font-size: 18px;
    line-height: 1.03;
    color: #fff;
    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
  .pick-up-container {
    display: flex;
    flex-direction: column;
  }
  .pick-up {
    background-color: #000;
    border-color: #000;
    @media screen and (max-width: 500px) {
      margin-bottom: 10px;
    }
  }
  .add-to-cart {
    background-color: #cc0000;
    border-color: #cc0000;
  }
`;
export const Returns = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  .returns-label {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    line-height: 0.9;
    color: #666;
    padding-right: 15px;
  }
  .returns-description {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
    line-height: 1.4;
    color: #666;
    padding-left: 14px;
  }
  hr {
    transform: rotate(180deg);
    height: 20px;
    color: #ccc;
  }
`;
export const SocialButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 13px;
  .social-button {
    padding-top: 4px;
    padding-bottom: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    background-color: #f3f3f3;
    color: #333333;
    border: none;
    width: 32%;
    @media screen and (max-width: 500px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
