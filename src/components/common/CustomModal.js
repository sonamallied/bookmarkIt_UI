import React, { Component, useState } from 'react';
import Form from 'react-bootstrap/Form'
import { Modal, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'


function CustomModal() {
  const [show, setShow] = useState(false);

  const [inputList, setInputList] = useState([]);

  const handleClose = (event) => {
    debugger;
    setInputList(inputList.concat(<Card style={{ width: '18rem' }}>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>));

    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Chicklet
        </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Cards</Modal.Title>
        </Modal.Header>
        {/* <Form>
            <input></input>
          </Form> */}
        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        {/* <Form>

    <Form.Label>Add Long Url</Form.Label>
    <Form.Control type="longUrl" placeholder="Enter long Url" />
    <Form.File id="exampleFormControlFile1" label="logo input" />


 
  
</Form> */}
        <Modal.Body>
          <Form>
            <Form.Group controlId="longUrl">
              <Form.Label>Long Url</Form.Label>
              <Form.Control type="text" placeholder="Enter long url" />

              <Form.Label>Chicklet Name</Form.Label>
              <Form.Control type="text" placeholder="Enter chicklet name" />

              <Form.Label>Select Logo</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
            </Button>
        </Modal.Footer>
      </Modal>

      {inputList}
    </>
  );
}

export default CustomModal