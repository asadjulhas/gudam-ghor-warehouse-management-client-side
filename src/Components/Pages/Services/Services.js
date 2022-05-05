import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Services.css'
const Services = () => {
  const [products] = useProducts();
  const nagivate = useNavigate();
  const manageInventory = useNavigate();
  
  const productDetails = (id) => {
    nagivate(`/inventory/${id}`)
  }

   // Go inventory page
   const goInventory = () => {
    manageInventory('/manage-inventories')
  }

  return (
    <section className='services_area pb-5'>
       <div className="container">
       <div className="section_title text-center pt-5 pb-5">
         <h2>Our fruits  <br/> are fresh organic </h2>
       </div>

      <div className="row">

{
  products.slice(0, 6).map(product => <SingleProduct productDetails={productDetails} product={product} key={product._id} />)
}

      </div>
      <div className="manage text-center">

<Button onClick={goInventory} className='btn-style1 manage_in_btn'>Manage Inventories</Button>
      </div>
       </div>
    </section>
  );
};

export default Services;