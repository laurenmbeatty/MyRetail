import React from "react";
import Carousel from "nuka-carousel";

class RetailCarousel extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      wrapAround: true,
      slidesToShow: 3
    };
  }
  render() {
    const { images } = this.props;
    return (
      <Carousel
        slidesToShow={this.state.slidesToShow}
        wrapAround={this.state.wrapAround}
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
    );
  }
}
export default RetailCarousel;
