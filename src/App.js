import React from "react";
import { render } from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import * as Styled from "./styles";

library.add(faSearchPlus, faStar, faTag, faPlusCircle, faMinusCircle);
class App extends React.Component {
  state = { loading: true, productData };

  componentDidMount() {
    console.log(productData.CatalogEntryView);
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
          <Styled.MainImage
            src={productData.Images[0].PrimaryImage[0].image}
            alt="Ninja Blender"
          />
          <RetailCarousel images={productData.Images[0].AlternateImages} />
        </Styled.ColOne>
        <Styled.ColTwo>
          <Highlights highlights={productData.ItemDescription[0].features} />
        </Styled.ColTwo>
      </Styled.Main>
    ) : null;
  }
}
render(<App />, document.getElementById("root"));
