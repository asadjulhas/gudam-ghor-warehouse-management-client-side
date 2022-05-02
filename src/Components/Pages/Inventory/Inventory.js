import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../../../Hooks/PageTitle';

const Inventory = () => {
  const {id} = useParams()
  return (
    <div>
<PageTitle title='Inventory' />
      <h1>This is inventory for {id}</h1>
    </div>
  );
};

export default Inventory;