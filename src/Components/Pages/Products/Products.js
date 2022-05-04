import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../../Hooks/PageTitle';
import useProducts from '../../../Hooks/useProducts';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
  const nagivate = useNavigate();
  const [products] = useProducts();
  const productDetails = (id) => {
    nagivate(`/inventory/${id}`)
  }
  return (
    <div>
      <PageTitle title='Products'/>
     <section className='services_area pb-5'>
       <div className="container">
       <div className="section_title text-center pt-5 pb-5">
         <h2>Our fruits  <br/> are fresh organic </h2>
       </div>

      <div className="row">

{
  products.map(product => <SingleProduct productDetails={productDetails} product={product} key={product._id} />)
}

      </div>
       </div>
    </section>
    </div>
  );
};

export default Products;