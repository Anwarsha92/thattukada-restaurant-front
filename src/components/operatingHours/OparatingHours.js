import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function OparatingHours({oh}) {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    console.log(oh);
  return (
    <div>
        { oh&&
            <div>
                <Button variant="secondary" onClick={handleShow}>
            Operating Hours
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Operating Hours</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <ListGroup variant="flush">
          <ListGroup.Item>Monday : {oh.Monday}</ListGroup.Item>
          <ListGroup.Item>Tuesday : {oh.Tuesday}</ListGroup.Item>
          <ListGroup.Item>Wednesday : {oh.Wednesday}</ListGroup.Item>
          <ListGroup.Item>Thursday : {oh.Thursday}</ListGroup.Item>
          <ListGroup.Item>Friday : {oh.Friday}</ListGroup.Item>
          <ListGroup.Item>Saturday : {oh.Saturday}</ListGroup.Item>
          <ListGroup.Item>Sunday : {oh.Sunday}</ListGroup.Item>
         
        </ListGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
            </div>
      }
    </div>
  )
}

export default OparatingHours