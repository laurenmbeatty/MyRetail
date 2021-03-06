import styled from "styled-components";
const arrowLeft = require("../../../public/images/ArrowLeft.png");
const arrowRight = require("../../../public/images/ArrowRight.png");

export const CarouselArea = styled.section`
  margin: 0 auto 25px;
  .show-larger {
    margin-top: 67px;
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
  .slider.carousel {
    width: 220px !important;
    margin-left: auto;
    margin-right: auto;
  }
  .chosen {
    border: 1px solid #999;
  }
  .slider-control-bottomcenter {
    display: none;
  }
  .slider-control-centerright {
    right: -60px !important;
    @media screen and (max-width: 400px) {
      right: -45px !important;
    }
  }
  .slider-control-centerleft {
    left: -60px !important;
    @media screen and (max-width: 400px) {
      left: -45px !important;
    }
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
export const MainImage = styled.img`
  display: block;
  margin: 0 auto;
  @media screen and (max-width: 400px) {
    width: 100%;
    height: auto;
  }
`;
