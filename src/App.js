import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearchPlus,
  faStar,
  faTag,
  faPlusCircle,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";
import Product from "./components/product/Product";
import ReviewDetail from "./components/reviewDetail/ReviewDetail";

//import * as Styled from "./styles";

library.add(faSearchPlus, faStar, faTag, faPlusCircle, faMinusCircle);
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Product path="/" />
          <ReviewDetail path="/reviewDetail" />
        </Router>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
