import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Styled from "./styles";
class Reviews extends React.Component {
  manipulateDate = info => {
    let newDate = "";
    const month = info.slice(4, 7);
    info = new Date(info);
    const year = info.getFullYear();
    const day = info.getDate();

    newDate = `${month} ${day}, ${year}`;
    return newDate;
  };

  render() {
    const { reviews } = this.props;
    const starsArray = [1, 2, 3, 4, 5];

    return (
      <Styled.ReviewSection>
        {reviews && (
          <Styled.ReviewHeading>
            <div className="ratings-stars-container">
              <div className="ratings-stars">
                {starsArray.map(num =>
                  num <= parseInt(reviews.consolidatedOverallRating) ? (
                    <FontAwesomeIcon
                      key={num}
                      icon="star"
                      className="icon-star active"
                    />
                  ) : (
                    <FontAwesomeIcon
                      key={num}
                      icon="star"
                      className="icon-star"
                    />
                  )
                )}
              </div>
              <span className="ratings-label">overall</span>
            </div>
            <a href="/" className="view-all-ratings">
              view all {reviews.totalReviews} reviews
            </a>
          </Styled.ReviewHeading>
        )}
        {reviews && (
          <Styled.ReviewMain>
            <div className="review-main-heading">
              <div className="pro-con">
                <p>PRO</p>
                <span>most helpful 4-5 star review</span>
              </div>
              <div className="pro-con">
                <p>CON</p>
                <span>most helpful 1-2 star review</span>
              </div>
            </div>
            <hr />
            <Styled.ProConReviewContainer>
              <Styled.Review>
                <div className="ratings-stars">
                  {starsArray.map(num =>
                    num <= parseInt(reviews.Pro[0].overallRating) ? (
                      <FontAwesomeIcon
                        key={num}
                        icon="star"
                        className="icon-star active"
                      />
                    ) : (
                      <FontAwesomeIcon
                        key={num}
                        icon="star"
                        className="icon-star"
                      />
                    )
                  )}
                </div>
                <h3 className="review-title">{reviews.Pro[0].title}</h3>
                <p className="review-description">{reviews.Pro[0].review}</p>
                <div className="review-footer">
                  <span className="reviewer">{reviews.Pro[0].screenName}</span>
                  <span className="review-date">
                    {this.manipulateDate(reviews.Pro[0].datePosted)}
                  </span>
                </div>
              </Styled.Review>
              <Styled.Review>
                <div className="ratings-stars">
                  {starsArray.map(num =>
                    num <= parseInt(reviews.Con[0].overallRating) ? (
                      <FontAwesomeIcon
                        key={num}
                        icon="star"
                        className="icon-star active"
                      />
                    ) : (
                      <FontAwesomeIcon
                        key={num}
                        icon="star"
                        className="icon-star"
                      />
                    )
                  )}
                </div>
                <h3 className="review-title">{reviews.Con[0].title}</h3>
                <p className="review-description">{reviews.Con[0].review}</p>
                <div className="review-footer">
                  <span className="reviewer">{reviews.Con[0].screenName}</span>
                  <span className="review-date">
                    {this.manipulateDate(reviews.Con[0].datePosted)}
                  </span>
                </div>
              </Styled.Review>
            </Styled.ProConReviewContainer>
          </Styled.ReviewMain>
        )}
      </Styled.ReviewSection>
    );
  }
}
export default Reviews;
