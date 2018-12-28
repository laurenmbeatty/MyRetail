import React from "react";
import { render } from "react-dom";
import productData from "./item-data";

class App extends React.Component {
  state = { loading: true, productData };

  componentDidMount() {
    this.setState({
      loading: false
    });
  }
  render() {
    const { productData, loading } = this.state;
    return !loading ? (
      <div className="main">
        <div className="col-1">
          <h1>
            <pre>{productData}</pre>
          </h1>
        </div>
        <div className="col-2">
          <h2>Column 2</h2>
        </div>
      </div>
    ) : null;
  }
}
render(<App />, document.getElementById("root"));
