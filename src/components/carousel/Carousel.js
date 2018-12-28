import React from "react";
import Carousel from "nuka-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Styled from "./styles";

class RetailCarousel extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      wrapAround: true,
      slidesToShow: 3,
      cellSpacing: 15,
      slideWidth: "72px",
      slideHeight: "72px",
      autoGenerateStyleTag: true
    };
  }
  render() {
    const { images } = this.props;
    return (
      <Styled.CarouselArea>
        <div className="show-larger">
          <FontAwesomeIcon icon="search-plus" />
          <p>view larger</p>
        </div>
        <Carousel
          className="carousel"
          slidesToShow={this.state.slidesToShow}
          wrapAround={this.state.wrapAround}
          cellSpacing={this.state.cellSpacing}
          slideWidth={this.state.slideWidth}
          slideHeight={this.state.slideHeight}
          autoGenerateStyleTag={this.state.autoGenerateStyleTag}
        >
          {images.map((image, index) => (
            <img
              src={image.image}
              key={index}
              index={index}
              alt={`ninja-blender-${index + 1}`}
            />
          ))}
        </Carousel>
      </Styled.CarouselArea>
    );
  }
}
export default RetailCarousel;
