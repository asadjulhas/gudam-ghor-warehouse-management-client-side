import React from 'react';
import './ManageInventories.css';
import { Table } from 'react-bootstrap';
import PageTitle from '../../../Hooks/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import useProducts from '../../../Hooks/useProducts';

const ManageInventories = () => {
  const [product] = useProducts();

  // Delete Handle 
  const handleDelete = (id) => {
    console.log(id)
  }

  return (
    <div className='manage_inventory_page'>
      <PageTitle title='Manage Inventory' />
      <div className="container">
        <div className="section_title">
          <h2 className='p-3'>Manage Inventory</h2>
        </div>
      <Table responsive striped bordered hover size="sm">
  <thead>
     <tr>
      <th>#</th>
      <th>ID</th>
      <th>Name</th>
      <th>Supplier</th>
      <th>Stock</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  { product.map((item, index) => <tr key={item._id}>
      <td>{index+1}</td>
      <td>{item?._id}</td>
      <td>{item?.name}</td>
      <td>{item?.supplier}</td>
      <td>{item?.stock}</td>
      <td>${item?.price  }</td>
      <td><FontAwesomeIcon title='Delete' onClick={()=>handleDelete(item?._id)} className='text-danger del_button' icon={faTrash} /></td>
    </tr>)  }

  </tbody>
</Table>
      </div>
    </div>
  );
};

export default ManageInventories;