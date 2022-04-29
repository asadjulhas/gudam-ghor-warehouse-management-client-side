import React from "react";
import './SingleProduct.css'
import { Button } from "react-bootstrap";

const SingleProduct = ({productDetails, product}) => {
  const {_id, name, price, description, img, supplier, stock} = product;
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
          <div className="supplier">
            Stock: <b>{stock}</b>
          </div>
          <Button onClick={()=>productDetails(_id)} className="scock_btn">stock status</Button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
