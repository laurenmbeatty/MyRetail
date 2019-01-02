import styled from "styled-components";
export const ReviewSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 15px;
  background-color: #f5f6f5;
  width: 60%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const Review = styled.div`
  width: 100%;
  margin-top: 9px;
  padding-right: 15px;
  svg.active {
    color: #cc0000;
  }
  svg {
    color: #999;
    font-size: 14px;
  }
  .review-title {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    color: #000;
  }
  .review-description {
    margin-top: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    color: #333;
  }
  .review-footer {
    display: flex;
  }
  .reviewer {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    line-height: 26px;
    color: #0066cc;
    padding-right: 3px;
  }
  .review-date {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    line-height: 26px;
    color: #333;
  }
`;
