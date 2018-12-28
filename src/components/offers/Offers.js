import React from "react";
import * as Styled from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Offers extends React.Component {
  render() {
    const { offers } = this.props;
    return (
      <div>
        <Styled.Rule />
        <Styled.Offers>
          {offers.map((offer, index) => (
            <li key={index}>
              <FontAwesomeIcon icon="tag" />
              <span>{offer.Description[0].shortDescription}</span>
            </li>
          ))}
        </Styled.Offers>
        <Styled.Rule />
      </div>
    );
  }
}
export default Offers;
