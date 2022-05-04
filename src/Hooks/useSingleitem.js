import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useSingleitem = (id) => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/item?id=${id}`)
    .then( (item) => {
      setItem(item.data)
    })

  },[item])
  return [item, setItem]
};

export default useSingleitem;