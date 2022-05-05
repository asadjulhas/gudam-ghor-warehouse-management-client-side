import React, { useEffect, useState } from 'react';
import './ManageInventories.css';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import PageTitle from '../../../Hooks/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import useProducts from '../../../Hooks/useProducts';
import { toast } from 'react-toastify';
import DelModal from '../../Modal/DelModal';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebaseinit';
import axios from 'axios';

const ManageInventories = () => {
  const [user] = useAuthState(auth);
  const [product, setProduct] = useProducts();

  // Handle Modal
  const [show, setShow] = useState(false);
  const [del, setDel] = useState(false);
  const [pid, setPid] = useState(false);
  const [title, setTitle] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Modal controllar for add product
  const [fshow, setFshow] = useState(false);

  const handleCloseF = () => setFshow(false);
  const handleShowF = () => setFshow(true);

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
  },[del]);

  // Add product function
  const handleAddproduct = (e) => {
    e.preventDefault();
    const name = e.target.pname.value;
    const supplier = e.target.supplier.value;
    const stock = e.target.stock.value;
    const img = e.target.image.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const email = user?.email;
    const data = {name, supplier, stock, img, price, description, email}

    axios.post('http://localhost:4000/add-product', data)
    .then(res => {
      if(res.data.acknowledged) {
        toast(`Products successfully added.`)
      };
      e.target.reset();
      handleCloseF();
    })

    // console.log(data)
  }

  return (
    <div className='manage_inventory_page'>
      <PageTitle title='Manage Inventory' />
      <div className="container">
        <div className="section_title mb-4">
          <h2 className='p-3'>Manage Inventory</h2>
          <Button className='btn-style1' variant="primary" onClick={handleShowF}>
        Add a product
      </Button>
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
      
      <Modal
        show={fshow}
        onHide={handleCloseF}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleAddproduct}>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control name='pname' type="text" placeholder="Product Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control name='supplier' type="text" placeholder="Supplier Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control name='stock' type="number" placeholder="In Stock" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control name='price' type="number" placeholder="Price" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control name='image' type="text" placeholder="Product image url" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control name='description'
      as="textarea"
      placeholder="Product description"
      style={{ height: '100px' }}
    />
  </Form.Group>
  
  <Button className='btn-style2' variant="primary" type="submit">
    Add product
  </Button>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseF}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default ManageInventories;