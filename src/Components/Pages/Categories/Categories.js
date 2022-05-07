import React from "react";
import "./Categories.css";
import c1 from "../../../images/categories/cat-1.jpg";
import c2 from "../../../images/categories/cat-2.jpg";
import c3 from "../../../images/categories/cat-3.jpg";
import c4 from "../../../images/categories/cat-4.jpg";
import c5 from "../../../images/categories/cat-5.jpg";
import c6 from "../../../images/categories/cat-6.jpg";

const Categories = () => {
  return (
    <section className="category-area section-tb-padding">
      <div className="container">
        <div className="left-title-capture">
          <div className="left-title mb-5">
            <h2>Our categories</h2>
          </div>
        </div>
        <div className="category-collection">
          <div className="swiper-wrapper">
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-4">
                <div className="swiper-slide swiper-slide-active">
                  <div className="cat-item">
                    <span className="cat-img">
                      <img src={c1} className="img-fluid" alt="img" />
                    </span>
                    <div className="cat-title">
                      <span className="title">Cow milk</span>
                      <span className="cat-url">
                        <span>+ 15 item</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-4">
                <div className="swiper-slide swiper-slide-active">
                  <div className="cat-item">
                    <span className="cat-img">
                      <img src={c2} className="img-fluid" alt="img" />
                    </span>
                    <div className="cat-title">
                      <span className="title">Dairy & chesse</span>
                      <span className="cat-url">
                        <span>+ 13 item</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-4">
                <div className="swiper-slide swiper-slide-active">
                  <div className="cat-item">
                    <span className="cat-img">
                      <img src={c3} className="img-fluid" alt="img" />
                    </span>
                    <div className="cat-title">
                      <span className="title">Fresh mushroom</span>
                      <span className="cat-url">
                        <span>+ 17 item</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-4">
                <div className="swiper-slide swiper-slide-active">
                  <div className="cat-item">
                    <span className="cat-img">
                      <img src={c4} className="img-fluid" alt="img" />
                    </span>
                    <div className="cat-title">
                      <span className="title">Fresh fruits</span>
                      <span className="cat-url">
                        <span>+ 9 item</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-4">
                <div className="swiper-slide swiper-slide-active">
                  <div className="cat-item">
                    <span className="cat-img">
                      <img src={c5} className="img-fluid" alt="img" />
                    </span>
                    <div className="cat-title">
                      <span className="title">Fresh Fish</span>
                      <span className="cat-url">
                        <span>+ 27 item</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-4">
                <div className="swiper-slide swiper-slide-active">
                  <div className="cat-item">
                    <span className="cat-img">
                      <img src={c6} className="img-fluid" alt="img" />
                    </span>
                    <div className="cat-title">
                      <span className="title">Fresh vegetable</span>
                      <span className="cat-url">
                        <span>+ 36 item</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
