import axios from 'axios';
import './MyItems.css'
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebaseinit';
import PageTitle from '../../../Hooks/PageTitle';
import SingleProduct from '../SingleProduct/SingleProduct';

const MyItems = () => {
  const nagivate = useNavigate();
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:4000/my-item?email=${user?.email}`)
  .then(item => {
    setItems(item.data)
  })
  },[])
  const productDetails = (id) => {
    nagivate(`/inventory/${id}`)
  }
  return (
//     <section className='services_area pb-5'>

// <PageTitle title='My items'/>
//        <div className="container">
//        <div className="section_title text-center pt-4 pb-4">
//          <h2>My items</h2>
//        </div>

//       <div className="row">

// {
//  items.length === 0 ? <h3 className='text-center text-info'>You don't added any items</h3> : items.map(product => <SingleProduct productDetails={productDetails} product={product} key={product._id} />)
// }

//       </div>
//       <div className="manage text-center">
//       </div>
//        </div>
//     </section>

<section className="cart-page section-tb-padding">
<PageTitle title='My items'/>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-xs-1 col-sm-2 col-md-3 col-lg-3"></div>
                    <div className="col-xl-6 col-xs-10 col-sm-8 col-md-6 col-lg-6">
                    <div className="cart-area">
                            <div className="cart-details">
                                <div className="cart-item">
                                    <span className="cart-head">My items</span>
                                    <span className="c-items">{items.length} item</span>
                                </div>
                  {
items.length === 0 ? <h3 className='text-center text-info mt-5'>You don't added any items</h3> : items.map(product => 
                        
                                <div className="cart-all-pro">
                                    <div className="cart-pro">
                                        <div className="cart-pro-image">
                                            <img src={product.img} className="img-fluid" alt="image"/>
                                        </div>
                                        <div className="pro-details">
                                            <h4>{product.name}</h4>
                                            <span className="pro-size"><span className="size">Size:</span> 5kg</span>
                                            <span className="pro-shop">Petro-demo</span>
                                            <span className="cart-pro-price">$384.51 CAD</span>
                                        </div>
                                    </div>
                                    <div className="qty-item">
                                        <div className="center">
                                            
                                            <a href="" className="pro-remove">Remove</a>
                                        </div>
                                    </div>
                                    <div className="all-pro-price">
                                        <span>${product.price} USD</span>
                                    </div>
                                </div>
                          ) }
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

  );
};

export default MyItems;