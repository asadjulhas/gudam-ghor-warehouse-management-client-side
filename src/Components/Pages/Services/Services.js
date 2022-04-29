import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Services.css'
const Services = () => {
  const [products] = useProducts();
  const nagivate = useNavigate();
  
  const productDetails = (id) => {
    console.log(id);
    nagivate(`/inventory/${id}`)
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
       </div>
    </section>
  );
};

export default Services;