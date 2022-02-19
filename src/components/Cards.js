import React from "react";
import Card from "./Card";
import Slider from "react-slick";

const Cards = ({ isPopular }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <Slider {...settings} className="sliderContainer">
      {[0, 2, 5, 5, 5, 5, 5].map((item, index) => (
        <Card
          key={index}
          className="sliderImg"
          alt={index}
          isPopular={isPopular}
        />
      ))}
    </Slider>
  );
};
export default Cards;
