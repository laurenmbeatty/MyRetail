import styled from "styled-components";
export const ReviewSection = styled.section``;
export const ReviewHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 90%;
  margin: 0 auto;
  .ratings-stars-container {
    display: flex;
    align-items: flex-end;
  }
  .ratings-stars {
    display: flex;
  }
  .ratings-label {
    padding-left: 8px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #000;
  }
  svg.active {
    font-size: 25px;
    color: #cc0000;
  }
  svg {
    font-size: 25px;
    color: #999999;
  }
  .view-all-ratings {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #000;
    text-decoration: none;
  }
  @media screen and (max-width: 1200px) {
    margin-top: 60px;
  }
`;

export const ReviewMain = styled.div`
  margin-top: 21px;
  background-color: #f6f5f5;
  width: 100%;
  padding: 16px 14px 16px 20px;
  box-sizing: border-box;
  .review-main-heading {
    display: flex;
    justify-content: space-between;
    .pro-con {
      width: 50%;
    }
  }
  .pro-con p {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    font-size: 16px;
    line-height: 1;
    color: #000;
  }
  .pro-con span {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    line-height: 16px;
    color: #666;
  }
  hr {
    border: 1px solid #ccc;
    margin-top: 12px;
  }
`;
export const ProConReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Review = styled.div`
  width: 50%;
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
