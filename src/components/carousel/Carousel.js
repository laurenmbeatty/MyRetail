import React from "react";
import Carousel from "nuka-carousel";

class RetailCarousel extends React.Component {
  render() {
    const { images } = this.props;
    return (
      <Carousel>
        {images.map((image, index) => (
          <img
            src={image.image}
            key={index}
            index={index}
            alt="`alternate-${index}`"
          />
        ))}
      </Carousel>
    );
  }
}
export default RetailCarousel;
