import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  return (
    <div>
      <section className="section-tb-padding text-center">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="fnf-area">
                            <h1 className="fnf-title">4<span className="color-font">04</span></h1>
                            <p className='mb-4'>Oops, The Page you are looking for can't be found!</p>
                            <Link to='/' className="back-home">Go to home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default NotFound;