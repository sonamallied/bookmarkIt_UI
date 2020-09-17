import React, { Component, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Modal, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import "./Box.css";
import { v4 as uuidv4 } from "uuid";

function CustomModal() {
  const [show, setShow] = useState(false);

  const [inputList, setInputList] = useState([]);

  const [longUrl, setLongUrl] = useState("");
  const [chickletName, setchickletName] = useState("");

  const [success, setSuccess] = useState([]);

  const [request, setResuest] = useState([""]);

  const cardClick = () => {
    alert();
  };

  const handleClose = (event) => {
    debugger;
    setInputList(
      inputList.concat(
        <Card style={{ width: "18rem" }} className="box" onClick={cardClick}>
          <Card.Img variant="top" src="holder.js/100px180" src="" />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      )
    );

    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    //event.preventDefault();

    fetch("http://localhost:5000/requestChikclet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        longUrl: longUrl,
        chikcletName: chickletName,
        guid: uuidv4(),
      }),
    });

    setShow(false);
  };

  const handleRequest = () => {
    fetch("http://localhost:5000/requestChikclet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        longUrl: longUrl,
        chikcletName: chickletName,
        guid: uuidv4(),
      }),
    });
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">BookmarkIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Setting</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline className="mr-sm-2">
            <Button variant="outline-primary" onClick={handleShow}>
              Add Chicklet
            </Button>
          </Form>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success" onClick="">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Cards</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group controlId="longUrl">
              <Form.Label>Long Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter long url"
                name="longUrl"
                id="longUrl"
                onChange={(e) => setLongUrl(e.target.value)}
                value={longUrl}
              />

              <Form.Label>Chicklet Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter chicklet name"
                name="chickletName"
                id="chickletName"
                onChange={(e) => setchickletName(e.target.value)}
                value={chickletName}
              />

              <Form.Label>Select Logo</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Request
            </Button>
          </Modal.Footer>
        </form>
      </Modal>

      <div className="grid">{request}</div>
    </>
  );
}

export default CustomModal;
