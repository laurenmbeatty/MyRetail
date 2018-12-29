import React from "react";
import * as Styled from "./styles";
class Highlights extends React.Component {
  render() {
    const { highlights } = this.props;
    return (
      <div>
        <Styled.HighlightsTitle>product highlights</Styled.HighlightsTitle>
        {highlights && (
          <Styled.Highlights>
            {highlights.map((highlight, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: highlight }} />
            ))}
          </Styled.Highlights>
        )}
      </div>
    );
  }
}
export default Highlights;
