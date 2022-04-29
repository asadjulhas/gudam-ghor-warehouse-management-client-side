import React from 'react';
import banner1 from '../../../images/banner/banner-1.png'
import banner2 from '../../../images/banner/banner-2.jpg'
import banner3 from '../../../images/banner/banner-3.png'
import { Link } from 'react-router-dom';

const Feature = () => {
  return (
    <section className="section-tb-padding grid-banner">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="organic-food-fresh-banner">
                            <div className="offer-banner">
                            <Link to='/'  className="banner-hover">
                                    <img src={banner1} alt="offer-banner" className="img-fluid" />
                                </Link>
                                <div className="banner-content banner-text">
                                    <h2>
                                        <span>Organic</span>
                                        <span>vegetables</span>
                                    </h2>
                                    <Link to='/' className='btn-style3'>Chceck stock</Link>
                                </div>
                            </div>
                            <div className="offer-banner other-banner">
                            <Link to='/' className="banner-hover">
                                    <img src={banner2} alt="offer-banner" className="img-fluid" />
                                </Link>
                                <div className="banner-content banner-text">
                                    <h2>
                                        <span>Organic</span>
                                        <span>Fresh meat</span>
                                    </h2>
                                    <Link to='/' className='btn-style2'>Chceck stock</Link>
                                </div>
                            </div>
                            <div className="offer-banner">
                            <Link to='/' className="banner-hover">
                                    <img src={banner3} alt="offer-banner" className="img-fluid" />
                                </Link>
                                <div className="banner-content banner-text">
                                    <h2>
                                        <span>Organic</span>
                                        <span>fresh fruit</span>
                                    </h2>
                                    <Link to='/' className='btn-style3'>Chceck stock</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default Feature;