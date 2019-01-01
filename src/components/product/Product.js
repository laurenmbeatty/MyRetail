import React from "react";
//import { render } from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearchPlus,
  faStar,
  faTag,
  faPlusCircle,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";
import productData from "../../item-data";
import RetailCarousel from "../retailCarousel/RetailCarousel";
import Highlights from "../highlights/Highlights";
import Offers from "../offers/Offers";
import Order from "../order/Order";
import Reviews from "../reviews/Reviews";

import * as Styled from "../../styles";

library.add(faSearchPlus, faStar, faTag, faPlusCircle, faMinusCircle);
class Product extends React.Component {
  state = { loading: true, productData, windowWidth: 1 };

  updateDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth
    });
  };

  componentDidMount() {
    this.setState({
      loading: false,
      productData: productData.CatalogEntryView[0],
      windowWidth: window.innerWidth
    });

    window.addEventListener("resize", this.updateDimensions);
  }

  componentDidUpdate() {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 0);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const { productData, loading, windowWidth } = this.state;
    return !loading ? (
      <Styled.Main>
        <Styled.ColOne>
          <Styled.MainTitle>{productData.title}</Styled.MainTitle>
          <RetailCarousel
            images={[
              ...productData.Images[0].PrimaryImage,
              ...productData.Images[0].AlternateImages
            ]}
          />
          {windowWidth > 1199 ? (
            <Reviews reviews={productData.CustomerReview[0]} />
          ) : null}
        </Styled.ColOne>
        <Styled.ColTwo>
          <Styled.Price>
            <span className="formatted-price">
              {productData.Offers[0].OfferPrice[0].formattedPriceValue}
            </span>
            <span className="price-qualifier">
              {productData.Offers[0].OfferPrice[0].priceQualifier}
            </span>
          </Styled.Price>
          <Offers offers={productData.Promotions} />
          <Order available={productData.purchasingChannelCode} />
          <Highlights highlights={productData.ItemDescription[0].features} />
          {windowWidth < 1200 ? (
            <Reviews reviews={productData.CustomerReview[0]} />
          ) : null}
        </Styled.ColTwo>
      </Styled.Main>
    ) : null;
  }
}
export default Product;
