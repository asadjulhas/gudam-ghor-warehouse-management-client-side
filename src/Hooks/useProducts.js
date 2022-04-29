import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useProducts = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
      axios.get('http://localhost:5000/product')
    .then(products => {
      setProduct(products.data);
    })
  },[])
  return [product]
};

export default useProducts;