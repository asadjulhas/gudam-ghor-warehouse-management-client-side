import axios from 'axios';
import './MyItems.css'
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebaseinit';
import PageTitle from '../../../Hooks/PageTitle';
import SingleProduct from '../SingleProduct/SingleProduct';
import DelModal from '../../Modal/DelModal';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import { Button, Form, Modal } from 'react-bootstrap';

const MyItems = () => {
  const toLogin = useNavigate();
   // Handle Modal
   const [show, setShow] = useState(false);
   const [del, setDel] = useState(false);
   const [pid, setPid] = useState(false);
   const [title, setTitle] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  // Form alert
  const [formAlert, setFormAlert] = useState('');

  const nagivate = useNavigate();
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([])
  useEffect(() => {
    const getOrders = async () => {
  try {
    const {data} = await axios.get(`https://stormy-gorge-17032.herokuapp.com/my-item?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    setItems(data);
  } catch (error) {
if(error.response.status === 401 || error.response.status === 403) {
  localStorage.removeItem('accessToken')
  toast('Sorry, you dont have access');
  signOut(auth);
  toLogin('/login')
}
  }

}
getOrders();
  },[items])
  const productDetails = (id) => {
    nagivate(`/inventory/${id}`)
  }

    // Modal controllar for add product
    const [fshow, setFshow] = useState(false);
    const handleCloseF = () => setFshow(false);
    const handleShowF = () => setFshow(true);

  // Add product function
  const handleAddproduct = (e) => {
    e.preventDefault();
    const name = e.target.pname.value;
    if(!name) {
      setFormAlert('Please added product name')
      return;
    } else {
      setFormAlert('')
    }
    const supplier = e.target.supplier.value;
    const stock = e.target.stock.value;
    const img = e.target.image.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const email = user?.email;
    const data = {name, supplier, stock, img, price, description, email}

    axios.post('https://stormy-gorge-17032.herokuapp.com/add-product', data)
    .then(res => {
      if(res.data.acknowledged) {
        toast(`Products successfully added.`)
      };
      e.target.reset();
      handleCloseF();
    })
  }

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
      fetch(`https://stormy-gorge-17032.herokuapp.com/delete/${pid}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(result => {
      if(result.acknowledged) {
        toast('Product Successfully Deleted!');
        const remainProducts = items.filter(item => item._id !== pid);
        setItems(remainProducts)
      }
    })
    }
  },[del]);

  return (

<section className="cart-page section-tb-padding">
<PageTitle title='My items'/>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-xs-1 col-sm-2 col-md-3 col-lg-3"></div>
                    <div className="col-xl-6 col-xs-10 col-sm-8 col-md-6 col-lg-6">
                    <div className="cart-area">
                            <div className="cart-details">
                                <div className="cart-item">
                                    <span className="cart-head">My items</span>
                                    <span><Button className='btn-sm btn-style1' variant="primary" onClick={handleShowF}>
        Add a product
      </Button></span>
                                    <span className="c-items">{items.length} item</span>
                                </div>
                  {
items.length === 0 ? <h3 className='text-center text-info mt-5'>You don't added any items</h3> : items.map(product => 
                        
                                <div key={product._id} className="cart-all-pro">
                                    <div className="cart-pro">
                                        <div className="cart-pro-image">
                                            <img src={product.img} className="img-fluid" alt={product.name}/>
                                        </div>
                                        <div className="pro-details">
                                            <h4>{product.name}</h4>
                                            <span className="pro-size"><span className="size">In stock:</span> {product.stock}</span>
                                            <span className="pro-size"><span className="size">Supplier:</span> {product.supplier}</span>
                                        </div>
                                    </div>
                                    <div className="qty-item">
                                        <div className="center">
                                            <button onClick={()=>handleDelete(product._id, product.name)} className='btn btn-sm btn-danger'>Delete</button>
                                        </div>
                                    </div>
                                    <div className="all-pro-price">
                                        <span>${product.price} USD</span>
                                    </div>
                                </div>
                          ) }
                        </div>
                        </div>
                    </div>
                    
                </div>
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
    <Form.Control required name='pname' type="text" placeholder="Product Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control required name='supplier' type="text" placeholder="Supplier Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control required name='stock' type="number" placeholder="In Stock" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control required name='price' type="number" placeholder="Price" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control required name='image' type="text" placeholder="Product image url" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control required name='description'
      as="textarea"
      placeholder="Product description"
      style={{ height: '100px' }}
    />
  </Form.Group>
  
  <p className='text-danger'>{formAlert}</p>
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


<DelModal show={show} setDel={setDel} title={title} handleClose={handleClose} />
        </section>

  );
};

export default MyItems;