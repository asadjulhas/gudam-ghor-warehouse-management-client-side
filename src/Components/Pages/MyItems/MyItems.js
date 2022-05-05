import axios from 'axios';
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
    <section className='services_area pb-5'>

<PageTitle title='My items'/>
       <div className="container">
       <div className="section_title text-center pt-4 pb-4">
         <h2>My items</h2>
       </div>

      <div className="row">

{
 items.length === 0 ? <h3 className='text-center text-info'>You don't added any items</h3> : items.map(product => <SingleProduct productDetails={productDetails} product={product} key={product._id} />)
}

      </div>
      <div className="manage text-center">
      </div>
       </div>
    </section>
  );
};

export default MyItems;