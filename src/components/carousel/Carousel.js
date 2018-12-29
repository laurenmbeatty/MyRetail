import React from "react";
import Carousel from "nuka-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Styled from "./styles";

class RetailCarousel extends React.Component {
  state = {
    slideIndex: 0
  };

  render() {
    const { images } = this.props;
    const { slideIndex } = this.state;

    return (
      <Styled.CarouselArea>
        <div className="show-larger">
          <FontAwesomeIcon icon="search-plus" />
          <p>view larger</p>
        </div>
        <Carousel
          className="carousel"
          slidesToShow={3}
          wrapAround={true}
          cellSpacing={15}
          slideWidth={"72px"}
          slideHeight={"72px"}
        >
          {images.map((image, index) => (
            /* eslint-disable-next-line */
            <img
              onClick={event =>
                this.setState({
                  slideIndex: parseInt(event.target.getAttribute("value"))
                })
              }
              src={image.image}
              key={index}
              index={index}
              value={index}
              alt={`ninja-blender-${index + 1}`}
            />
          ))}
        </Carousel>
      </Styled.CarouselArea>
    );
  }
}
export default RetailCarousel;
