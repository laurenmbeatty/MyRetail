import styled from "styled-components";
const arrowLeft = require("../../../public/images/ArrowLeft.png");
const arrowRight = require("../../../public/images/ArrowRight.png");

export const CarouselArea = styled.section`
  width: 200px;
  margin: 67px auto 25px;
  .show-larger {
    display: flex;
    justify-content: center;
    color: #999;
    font-family: Helvetica, sans-serif;
    margin-bottom: 20px;
  }
  .show-larger svg {
    font-size: 19px;
    font-weight: lighter;
    margin-right: 11px;
    cursor: pointer;
  }
  .show-larger p {
    margin: 0;
    font-size: 14.5px;
  }
  .slider-control-bottomcenter {
    display: none;
  }
  .slider-control-centerright {
    right: -60px !important;
  }
  .slider-control-centerleft {
    left: -60px !important;
  }
  .slider-control-centerright button {
    background: #fff url(${arrowRight}) no-repeat center !important;
    color: #fff !important;
    &:focus {
      outline: none;
    }
    font-size: 0;
  }
  .slider-control-centerleft button {
    background: #fff url(${arrowLeft}) no-repeat center !important;
    color: #fff !important;
    &:focus {
      outline: none;
    }
    font-size: 0;
  }
`;
