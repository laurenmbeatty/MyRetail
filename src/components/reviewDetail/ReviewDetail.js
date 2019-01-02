import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import productData from "../../item-data";
import * as Styled from "./styles";
class ProductDetail extends React.Component {
  state = { loading: true, productData };
  componentDidMount() {
    this.setState({
      loading: false,
      mainData: productData.CatalogEntryView[0],
      reviews: productData.CatalogEntryView[0].CustomerReview[0].Reviews
    });
  }
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
    const { loading, reviews } = this.state;
    const starsArray = [1, 2, 3, 4, 5];
    return !loading ? (
      <div>
        <Styled.ReviewSection>
          {reviews &&
            reviews.map((review, index) => (
              <Styled.Review key={index}>
                <div className="ratings-stars">
                  {starsArray.map(num =>
                    num <= parseInt(review.overallRating) ? (
                      <FontAwesomeIcon
                        data-testid={`rendered-star`}
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
                <h3 className="review-title">{review.title}</h3>
                <p className="review-description">{review.review}</p>
                <div className="review-footer">
                  <span className="reviewer">{review.screenName}</span>
                  <span className="review-date">
                    {this.manipulateDate(review.datePosted)}
                  </span>
                </div>
              </Styled.Review>
            ))}
        </Styled.ReviewSection>
      </div>
    ) : null;
  }
}
export default ProductDetail;
