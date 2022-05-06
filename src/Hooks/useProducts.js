import axios from 'axios';
import React, { useEffect, useState } from 'react';
// https://stormy-gorge-17032.herokuapp.com/product
const useProducts = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
      axios.get('http://localhost:4000/product')
    .then(products => {
      setProduct(products.data);
    })
  },[product])
  return [product, setProduct]
};

export default useProducts;