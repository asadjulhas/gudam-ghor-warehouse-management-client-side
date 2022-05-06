import React from "react";
import "./Inventory.css";
import { useNavigate, useParams } from "react-router-dom";
import PageTitle from "../../../Hooks/PageTitle";
import useSingleitem from "../../../Hooks/useSingleitem";
import pay from "../../../images/pay-image.jpg";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const Inventory = () => {
  const manageInventory = useNavigate();
  const toHome = useNavigate();
  const { id } = useParams();
  const [item] = useSingleitem(id);

  if(item.length === 0) {
    toHome('/')
  }
  // Increase stock on product
  const handleStock = () => {
    const currentStock = item.stock - 1;
  const data= {currentStock}
    fetch(`https://stormy-gorge-17032.herokuapp.com/update/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      if(result.result.acknowledged) {
        toast('One item Delivered')
      }
    }
    )
  }

  // Increase Stock
  const handleIncreaseStock = (e) => {
    e.preventDefault();
    const increaseStock = e.target.name.value;
    const currentStock = parseInt(item.stock) + parseInt(increaseStock);
    const data= {currentStock}
    fetch(`https://stormy-gorge-17032.herokuapp.com/update/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      if(result.result.acknowledged) {
        toast(`${increaseStock} products added in stock`)
      }
    }
    )
    
  }
  // Go inventory page
  const goInventory = () => {
    manageInventory('/manage-inventories')
  }
  return (
    <div className="mt-5 mb-3">
      <PageTitle title="Inventory" />
      <div className="container">
        <section className="pro-page">
          <div className="row pro-image">
            <div className="col-xl-5 col-lg-6 col-md-6 col-12 larg-image text-center">
              <img src={item.img} className="img-fluid" alt={item.name} />
            </div>
            <div className="col-xl-7 col-lg-6 col-md-6 col-12 pro-info">
              <h4>{item.name}</h4>
              <div className="pro-availabale">
                <span className="available">Availability:</span>
                <span className="pro-instock"> {item.stock} In stock</span>
              </div>
              <div className="pro-availabale">
                <span className="available">Supplier:</span>
                <span className="pro-instock"> {item.supplier}</span>
              </div>
              <div className="pro-price">
                <span className="new-price">${item.price} USD</span>
                <span className="old-price">
                  <del>${parseInt(item.price * 1.2)}.00</del>
                </span>
                <div className="Pro-lable">
                  <span className="p-discount">20%</span>
                </div>
              </div>
              <span className="pro-details">
                Hurry up! only <span className="pro-number">{item.stock}</span>{" "}
                products left in stock!
              </span>
              <p>{item.description}</p>

              <div className="pro-qty">
                <span className="qty">Restock:</span>
                <div className="plus-minus">
                  <span>
                    <Button disabled className="minus-btn text-black">
                      &nbsp;
                    </Button>
                    <form className="stockincreasebutton" onSubmit={handleIncreaseStock}>
                    <input
                      autoComplete="off"
                      placeholder="20"
                      type="number"
                      name="name"
                      required
                    />
                    <button className="plus-btn text-black">+</button>
                    </form>
                  </span>
                </div>
              </div>
              <div className="pro-btn">
                <Button onClick={handleStock} className="btn btn-style1">
                  <span>Delivered</span>
                </Button>
              </div>
              <div className="pay-img">
                <img src={pay} className="img-fluid" alt="pay-image" />
              </div>
            </div>
            <div className="manage text-center">

<Button onClick={()=>goInventory()} className='btn-style1 manage_in_btn'>Manage Inventories</Button>
          </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Inventory;
