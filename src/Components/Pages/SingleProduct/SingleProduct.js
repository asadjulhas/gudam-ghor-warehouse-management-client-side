import React from "react";
import './SingleProduct.css'
import { Button } from "react-bootstrap";
import p1 from "../../../images/fruites/p1.jpg";

const SingleProduct = ({productDetails, product}) => {
  const {_id, name, price, description, img, supplier} = product;
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="single_product">
        <img className="img-fluid" src={img} alt={name} />
        <div className="product_details">
        <h3>{name}</h3>
        <p>{description}</p>
          <div className="price">${price} USD</div>
          <div className="supplier">
            <b>supplier:</b> {supplier}
          </div>
          <Button onClick={()=>productDetails(_id)} className="scock_btn">stock update</Button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
