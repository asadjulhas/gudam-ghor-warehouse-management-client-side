import React from 'react';
import { Table } from 'react-bootstrap';
import PageTitle from '../../../Hooks/PageTitle';

const ManageInventories = () => {
  return (
    <div>
      <PageTitle title='Manage Inventory' />
      <div className="container">
        <div className="section_title">
          <h2 className='p-5'>Manage Inventory</h2>
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
    <tr>
      <td>1</td>
      <td>6565654545</td>
      <td>Fresh pineapple</td>
      <td>Chasi Agro</td>
      <td>420</td>
      <td>$150</td>
      <td><button className='btn btn-sm btn-danger'><i class="fa-solid fa-trash-can"></i></button></td>
    </tr>

  </tbody>
</Table>
      </div>
    </div>
  );
};

export default ManageInventories;