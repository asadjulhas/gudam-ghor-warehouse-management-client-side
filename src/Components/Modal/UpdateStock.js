import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const UpdateStock = ({showStock, handleCloseStock, handleIncreaseStock, name, stock, handleStock}) => {
  return (
    <div>

      <Modal centered show={showStock} onHide={handleCloseStock}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className="pro-availabale mb-3"><span className="available">Availability:</span><span className="pro-instock"> {stock} In stock</span></div>
        <form  onSubmit={handleIncreaseStock} className="">
                    <input className='form-control'
                      autoComplete="off"
                      placeholder="Input stock number"
                      type="number"
                      name="name"
                      required
                    />
                    <div className="resock_button mt-3">
                    <button className="btn-style2 btn btn-primary">Restock</button>

                &nbsp;<Button onClick={handleStock} className="btn btn-style3">
                  <span>Delivered 1</span>
                </Button>
                    </div>
                    </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseStock}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default UpdateStock;