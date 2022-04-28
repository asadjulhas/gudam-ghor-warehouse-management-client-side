import React from 'react';
import './Home.css'
import { Carousel } from 'react-bootstrap';
import slider1 from '../../images/slider/slider-1.jpg'
import slider2 from '../../images/slider/slider-2.jpg'
import slider3 from '../../images/slider/slider-3.jpg'
import banner1 from '../../images/banner/banner-1.png'
import banner2 from '../../images/banner/banner-2.jpg'
import banner3 from '../../images/banner/banner-3.png'

const Home = () => {
  return (
    <div className='homePage container mt-3'>
      
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
    <img className="d-block w-100"
      src={slider2}
    />

    <Carousel.Caption>
      <h3 className='text-dark'>Delicious <br/> ingredients</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider3}
    />

    <Carousel.Caption>
      <h3 className='text-dark'>Spices for <br/> cooking</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<section className="section-tb-padding grid-banner">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="organic-food-fresh-banner">
                            <div className="offer-banner">
                                <a className="banner-hover">
                                    <img src={banner1} alt="offer-banner" className="img-fluid" />
                                </a>
                                <div className="banner-content banner-text">
                                    <h2>
                                        <span>Organic</span>
                                        <span>vegetables</span>
                                    </h2>
                                    <a href="product-style-2.html" className="btn-style3">Shop now</a>
                                </div>
                            </div>
                            <div className="offer-banner other-banner">
                                <a>
                                    <img src={banner2} alt="offer-banner" className="img-fluid" />
                                </a>
                                <div className="banner-content">
                                    <div className="banner-subtitle">
                                        <span>Delivery in 2 hours</span>
                                    </div>
                                    <div className="banner-title">
                                        <h1 className="title">20%off</h1>
                                        <h2>
                                            <span>Free delivery on</span>
                                            <span>orders above $100</span>
                                        </h2>
                                    </div>
                                    <div className="banner-btn">
                                        <a href="product-style-2.html" className="btn-style2">Order now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="offer-banner">
                                <a className="banner-hover">
                                    <img src={banner3} alt="offer-banner" className="img-fluid" />
                                </a>
                                <div className="banner-content banner-text">
                                    <h2>
                                        <span>Organic</span>
                                        <span>fresh fruit</span>
                                    </h2>
                                    <a href="product-style-2.html" className="btn-style3">Shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
};

export default Home;