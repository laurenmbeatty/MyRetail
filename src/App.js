import React from "react";
import { render } from "react-dom";
import productData from "./item-data";
import RetailCarousel from "./components/carousel/Carousel";

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
      <div className="main">
        <div className="col-1">
          <h1>{productData.title}</h1>
          <RetailCarousel images={productData.Images[0].AlternateImages} />
        </div>
        <div className="col-2">
          <h2>Column 2</h2>
        </div>
      </div>
    ) : null;
  }
}
render(<App />, document.getElementById("root"));
