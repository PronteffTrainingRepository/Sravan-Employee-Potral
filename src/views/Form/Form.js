import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";

class Form extends Component {
  render() {
    const mystyle = {
      backgroundImage: 'linearGradiant("red", "green")',
    };
    return (
      <div style={{ backgroundColor: "olive", padding: "10px" }}>
        <h4>Manage Available Forms</h4>
        <br />
        <br />
        <Container className="themed-container" fluid={true} style={mystyle}>
          <Row>
            <Col md="3" lg="3">
              <h5>Search</h5>
            </Col>
            <Col md="9" lg="9">
              {" "}
              <InputGroup>
                <Input placeholder="Enter Your Search here" />
              </InputGroup>
            </Col>
          </Row>
          <br />
          <br />

          <Row>
            <Col md="3" lg="3">
              <h5>Form</h5>
            </Col>
            <Col md="9" lg="9">
              {" "}
              <InputGroup>
                <Input type="file" placeholder="Enter Your Search here" />
              </InputGroup>
            </Col>
          </Row>

          <br />
          <br />
          <Row></Row>
        </Container>
      </div>
    );
  }
}

export default Form;
