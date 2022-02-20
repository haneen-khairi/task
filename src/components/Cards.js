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
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
