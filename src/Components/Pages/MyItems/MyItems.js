import axios from 'axios';
import './MyItems.css'
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebaseinit';
import PageTitle from '../../../Hooks/PageTitle';
import SingleProduct from '../SingleProduct/SingleProduct';
import DelModal from '../../Modal/DelModal';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';

const MyItems = () => {
  const toLogin = useNavigate();
   // Handle Modal
   const [show, setShow] = useState(false);
   const [del, setDel] = useState(false);
   const [pid, setPid] = useState(false);
   const [title, setTitle] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  const nagivate = useNavigate();
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([])
  useEffect(() => {
    const getOrders = async () => {
  try {
    const {data} = await axios.get(`https://stormy-gorge-17032.herokuapp.com/my-item?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    setItems(data);
  } catch (error) {
if(error.response.status === 401 || error.response.status === 403) {
  localStorage.removeItem('accessToken')
  toast('Sorry, you dont have access');
  signOut(auth);
  toLogin('/login')
}
  }

}
getOrders();
  },[])
  const productDetails = (id) => {
    nagivate(`/inventory/${id}`)
  }

  // Delete Handle 
  const handleDelete = (id, title) => {
    handleShow();
    setPid(id);
    setTitle(title)
  }

  useEffect(() => {
    if(del) {
      handleClose();
      setDel(false);
      fetch(`https://stormy-gorge-17032.herokuapp.com/delete/${pid}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(result => {
      if(result.acknowledged) {
        toast('Product Successfully Deleted!');
        const remainProducts = items.filter(item => item._id !== pid);
        setItems(remainProducts)
      }
    })
    }
  },[del]);

  return (

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
                        
                                <div key={product._id} className="cart-all-pro">
                                    <div className="cart-pro">
                                        <div className="cart-pro-image">
                                            <img src={product.img} className="img-fluid" alt={product.name}/>
                                        </div>
                                        <div className="pro-details">
                                            <h4>{product.name}</h4>
                                            <span className="pro-size"><span className="size">In stock:</span> {product.stock}</span>
                                            <span className="pro-size"><span className="size">Supplier:</span> {product.supplier}</span>
                                        </div>
                                    </div>
                                    <div className="qty-item">
                                        <div className="center">
                                            <button onClick={()=>handleDelete(product._id, product.name)} className='btn btn-sm btn-danger'>Delete</button>
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

<DelModal show={show} setDel={setDel} title={title} handleClose={handleClose} />
        </section>

  );
};

export default MyItems;