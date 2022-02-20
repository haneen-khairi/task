import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';

export default function SimpleSlider() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "red" }}
        onClick={onClick}
      />
      
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [{
  
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        infinite: true,
        dots: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "slick", // destroys slick
      dots: true
    }]
  };
  const images = ["img/slide1.png", "img/slide1.png", "img/slide1.png"];
  return (
    
    <Slider {...settings} className="sliderContainer"  CustomArrowProps>
    
      {images.map((item, index) => (
        
        <img src={item} key={index} className="sliderImg" alt={index} />
        
      ))}
      
    </Slider>
    
  );
  
}
