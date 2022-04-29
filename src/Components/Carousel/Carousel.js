import React from 'react';
import { Carousel } from 'react-bootstrap';

import slider1 from '../../images/slider/slider-1.jpg'
import slider2 from '../../images/slider/slider-2.jpg'
import slider3 from '../../images/slider/slider-3.jpg'

const CarouselSlider = () => {
  return (
    <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='text-dark'>Vegetable <br/> basket free</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" alt='' src={slider2}/>

    <Carousel.Caption>
      <h3 className='text-dark'>Delicious <br/> ingredients</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img alt='' className="d-block w-100"
      src={slider3}
    />

    <Carousel.Caption>
      <h3 className='text-dark'>Spices for <br/> cooking</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default CarouselSlider;