import React, { useEffect, useState } from 'react';
import './ManageInventories.css';
import { Table } from 'react-bootstrap';
import PageTitle from '../../../Hooks/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import useProducts from '../../../Hooks/useProducts';
import { toast } from 'react-toastify';
import DelModal from '../../Modal/DelModal';

const ManageInventories = () => {
  const [product, setProduct] = useProducts();

  // Handle Modal
  const [show, setShow] = useState(false);
  const [del, setDel] = useState(false);
  const [pid, setPid] = useState(false);
  const [title, setTitle] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Delete Handle 
  const handleDelete = (id, title) => {
    handleShow();
    setPid(id);
    setTitle(title)
  }

  useEffect(() => {
    if(del) {
      handleClose();
      setDel(false);
      fetch(`http://localhost:4000/delete/${pid}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(result => {
      if(result.acknowledged) {
        toast('Product Successfully Deleted!');
        const remainProducts = product.filter(item => item._id !== pid);
        setProduct(remainProducts)
      }
    })
    }
  },[del])

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
      <td>{item?.name}</td>
      <td>{item?.supplier}</td>
      <td>{item?.stock}</td>
      <td>${item?.price  }</td>
      <td><FontAwesomeIcon title='Delete' onClick={()=>handleDelete(item?._id, item?.name)} className='text-danger del_button' icon={faTrash} /></td>
    </tr>)  }

  </tbody>
</Table>
<DelModal show={show} setDel={setDel} title={title} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default ManageInventories;