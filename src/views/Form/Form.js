import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Form.css";
import {
  Table,
  Container,
  Row,
  Col,
  InputGroup,
  Input,
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { FaDownload } from "react-icons/fa";

class Form extends Component {
  render() {
    return (
      <div>
        <Container>
          <Card>
            <CardHeader>Manage Available Forms</CardHeader>
            <CardBody>
              <CardText>
                <Row>
                  <Col md="3" lg="3">
                    <h5>Search</h5>
                  </Col>
                  <Col md="5" lg="">
                    {" "}
                    <InputGroup>
                      <Input
                        style={{ width: "200px" }}
                        placeholder="Enter Your Search here"
                      />
                      <Button>search</Button>
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
              </CardText>
            </CardBody>
            <CardFooter style={{ textAlign: "center" }}>
              {" "}
              <Button>Add New Form</Button>
            </CardFooter>
          </Card>

          <Table hover className="thover" bordered striped>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date Added</th>
                <th>Actions</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HR Form</td>
                <td>20-07-2020</td>
                <td>
                  <a href={"/form"}>view</a> | <a href={"/form"}>delete</a>
                </td>
                <td>
                  <Button>
                    <FaDownload />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Form 3AD</td>

                <td>20-07-2020</td>
                <td>
                  <a href="/dashboard">view</a> |{" "}
                  <a href="/dashboard">delete</a>
                </td>
                <td>
                  <Button>
                    <FaDownload />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Form 6</td>
                <td>20-07-2020</td>
                <td>
                  <a href="/dashboard">view</a> |{" "}
                  <a href="/dashboard">delete</a>
                </td>
                <td>
                  <Button>
                    <FaDownload />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Form-16</td>
                <td>20-07-2020</td>
                <td>
                  <a href="/dashboard">view</a> |{" "}
                  <a href="/dashboard">delete</a>
                </td>
                <td>
                  <Button>
                    <FaDownload />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Form 29C</td>
                <td>20-07-2020</td>
                <td>
                  <a href="/dashboard">view</a> |{" "}
                  <a href="/dashboard">delete</a>
                </td>
                <td>
                  <Button>
                    <FaDownload />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Form 49b</td>
                <td>20-07-2020</td>
                <td>
                  <a href="/dashboard">view</a> |{" "}
                  <a href="/dashboard">delete</a>
                </td>
                <td>
                  <Button>
                    <FaDownload />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Form 10B</td>
                <td>20-07-2020</td>
                <td>
                  <a href="/dashboard">view</a> |{" "}
                  <a href="/dashboard">delete</a>
                </td>
                <td>
                  <Button>
                    <FaDownload />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default Form;
