import React from "react";
import CustomModal from "./components/common/CustomModal";
import Table from "react-bootstrap/Table";

import { Component } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

export class user extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      approvedData: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/receiveFromQueue")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Prints result from `response.json()` in getRequest
        this.setState({ data: data.result });
      })
      .catch((error) => console.error(error));

    fetch("http://localhost:5000/getApprovedData")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Prints result from `response.json()` in getRequest
        this.setState({ approvedData: data.result });
      })
      .catch((error) => console.error(error));
  }
  approve(data) {
    console.log(data);

    fetch("http://localhost:5000/approve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        longUrl: data.longUrl,
        chikcletName: data.chikcletName,
        guid: data.guid,
      }),
    });
  }

  decline(data) {
    console.log(data);
  }

  launchUrl(url) {
    //alert(url);
    window.open(url);
  }

  render() {
    const data = this.state.data.map((result, key) => (
      <tr key={key}>
        admin
        <td></td>
        <td>{result.longUrl}</td>
        <td>{result.chikcletName}</td>
        <td>
          <form>
            <Button
              variant="success"
              onClick={() => this.approve(result)}
              type="submit"
            >
              Approve
            </Button>
            &nbsp; &nbsp;
            <Button
              variant="danger"
              onClick={() => this.decline(result)}
              type="submit"
            >
              Decline
            </Button>
          </form>
        </td>
      </tr>
    ));

    const approvedData = this.state.approvedData.map((result, key) => (
      <Card style={{ width: "18rem" }} className="box">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{result.chikcletName}</Card.Title>
          <Card.Text>{result.longUrl}</Card.Text>
          <Button
            variant="primary"
            onClick={() => this.launchUrl(result.longUrl)}
          >
            Launch
          </Button>
        </Card.Body>
      </Card>
    ));

    return (
      <div>
        <CustomModal />

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>User</th>
              <th>Long Url</th>
              <th>Chikclet Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </Table>
      </div>
    );
  }
}

export default user;
