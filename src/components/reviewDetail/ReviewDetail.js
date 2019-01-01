import React from "react";
import productData from "../../item-data";
//import * as Styled from "./styles";
class ProductDetail extends React.Component {
  state = { loading: true, productData };
  componentDidMount() {
    this.setState({
      loading: false,
      productData: productData.CatalogEntryView[0]
    });
  }
  render() {
    const { loading, productData } = this.state;
    return !loading ? (
      <div>
        <pre>{JSON.stringify(productData.CustomerReview[0].Reviews)}</pre>
      </div>
    ) : null;
  }
}
export default ProductDetail;
