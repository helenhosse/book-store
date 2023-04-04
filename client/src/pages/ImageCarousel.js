import React, { Component } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//Need to add images instead of placeholders

export default class SimpleSlider extends Component {
  render() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://via.placeholder.com/800x300" alt="Slide 1" />
      </div>
      <div>
        <img src="https://via.placeholder.com/800x300" alt="Slide 2" />
      </div>
      <div>
        <img src="https://via.placeholder.com/800x300" alt="Slide 3" />
      </div>
    </Slider>
  );
};
};
