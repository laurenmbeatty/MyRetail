import React from "react";
import { render } from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearchPlus,
  faStar,
  faTag,
  faPlusCircle,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";
import productData from "./item-data";
import RetailCarousel from "./components/carousel/Carousel";
import Highlights from "./components/highlights/Highlights";
import Offers from "./components/offers/Offers";
import Order from "./components/order/Order";
import Reviews from "./components/reviews/Reviews";

import * as Styled from "./styles";

library.add(faSearchPlus, faStar, faTag, faPlusCircle, faMinusCircle);
class App extends React.Component {
  state = { loading: true, productData };

  componentDidMount() {
    this.setState({
      loading: false,
      productData: productData.CatalogEntryView[0]
    });
  }

  render() {
    const { productData, loading } = this.state;
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
          <Reviews reviews={productData.CustomerReview[0]} />
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
        </Styled.ColTwo>
      </Styled.Main>
    ) : null;
  }
}
render(<App />, document.getElementById("root"));
