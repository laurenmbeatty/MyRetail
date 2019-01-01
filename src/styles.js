import styled from "styled-components";

export const MainTitle = styled.h1`
  font-family: Helvetica, sans-serif;
  font-size: 26px;
  font-weight: 300;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  margin: 0 auto 44px auto;
  width: 80%;
  @media screen and (max-width: 1200px) {
    width: 40%;
    min-width: 370px;
  }
`;

export const Main = styled.div`
  max-width: 1200px;
  margin: 100px auto 0 auto;
  display: flex;
  justify-content: center;
  background-color: #fff;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const ColOne = styled.div`
  width: 40%;
  margin-right: 2.5%;
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const ColTwo = styled.div`
  width: 41%;
  @media screen and (max-width: 1200px) {
    width: 50%;
    margin: 0 auto;
    min-width: 470px;
  }
`;

export const Price = styled.div`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 35px;
  margin-top: 10px;
  .formatted-price {
    font-size: 30.5px;
    font-weight: bold;
    line-height: 0.44;
    color: #000;
    padding-right: 6px;
  }
  .price-qualifier {
    font-size: 12px;
    font-weight: 400;
    color: #666;
    line-height: 2.46;
    text-transform: lowercase;
  }
`;
