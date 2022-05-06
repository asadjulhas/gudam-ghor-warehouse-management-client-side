import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useSingleitem = (id) => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios.get(`https://stormy-gorge-17032.herokuapp.com/item?id=${id}`)
    .then( (item) => {
      setItem(item.data)
    })

  },[item])
  return [item, setItem]
};

export default useSingleitem;