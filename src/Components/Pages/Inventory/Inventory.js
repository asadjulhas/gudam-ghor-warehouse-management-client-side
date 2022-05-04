import React from 'react';
import './Inventory.css'
import { useParams } from 'react-router-dom';
import PageTitle from '../../../Hooks/PageTitle';
import useSingleitem from '../../../Hooks/useSingleitem';
import pay from '../../../images/pay-image.jpg';
import { Button } from 'react-bootstrap';

const Inventory = () => {
  const {id} = useParams();
  const [item] = useSingleitem(id);
  return (
    <div className='mt-5 mb-3'>
<PageTitle title='Inventory' />
      <div className="container">
      <section className="pro-page">
                            <div className="row pro-image">
                              
                            <div className="col-xl-5 col-lg-6 col-md-6 col-12 larg-image">
                            <img src={item.img} className="img-fluid" alt="image" />
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
                                        <span className="old-price"><del>${parseInt(item.price*1.2)}.00</del></span>
                                        <div className="Pro-lable">
                                            <span className="p-discount">20%</span>
                                        </div>
                                    </div>
                                    <span className="pro-details">Hurry up! only <span className="pro-number">{item.stock}</span> products left in stock!</span>
                                    <p>{item.description}</p>
                                   
                                    
                                    <div className="pro-qty">
                                        <span className="qty">Restock:</span>
                                        <div className="plus-minus">
                                            <span>
                                                <Button disabled className="minus-btn text-black">-</Button>
                                                <input placeholder='20' type="text" name="name"/>
                                                <Button className="plus-btn text-black">+</Button>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="pro-btn">
                                        <Button className="btn btn-style1"><span>Delivered</span></Button>&nbsp;
                                        <a className="btn btn-style1"><span>Buy now</span></a>
                                    </div>
                                    <div className="pay-img">
                                            <img src={pay} className="img-fluid" alt="pay-image"/>
                                    </div>
                                </div>
                            </div>
                        </section>
      </div>
    </div>
  );
};

export default Inventory;