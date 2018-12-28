import styled from "styled-components";

export const CarouselArea = styled.section`
  width: 200px;
  margin: 67px auto;
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
`;
