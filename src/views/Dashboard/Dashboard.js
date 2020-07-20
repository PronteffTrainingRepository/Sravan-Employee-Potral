import React, { Component, lazy, Suspense, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Clock from "react-live-clock";
import { FiList } from "react-icons/fi";
import { Dropdown } from "react-bootstrap";
import { Button, Container, Col, Row, Table } from "reactstrap";
import empimg from "../../assets/img/emp2.jfif";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";

let time = new Date().toLocaleString();

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }

  render() {
    return (
      <Container>
        <Container style={{ backgroundColor: "whitesmoke" }}>
          <Row style={{ backgroundColor: "#bcbaba", height: "30px" }}></Row>
          <Row style={{ backgroundColor: "#d1cfcf", height: "30px" }}></Row>
          <Row style={{ height: "150px" }}>
            <Col xs="7" sm="7" md="7" lg="7">
              <br />
              <h3>Employee Name</h3>
              <p style={{ fontSize: "15px" }}>
                There are Four Upcoming This Week
              </p>
              <p style={{ fontSize: "15px" }}>
                You are Currently Looking for{" "}
                <select
                  style={{
                    borderColor: "none",
                    borderWidth: "0",
                    borderWidth: "0 0  2px 0",
                    height: "30px",
                    width: "auto",
                    borderRadius: "5px",
                    backgroundColor: "rgb(155, 160, 181)",
                  }}
                >
                  <option value="ManagingLeads" selected>
                    {""} ManagingLeads
                  </option>
                  <option value="Management"> Management</option>
                </select>
              </p>
            </Col>
            <Col xs="5" sm="5" md="5" lg="5">
              <img
                style={{
                  width: "100%",
                  height: "190px",
                  marginTop: "-40px",
                  borderBottomLeftRadius: "50px",
                  borderTopLeftRadius: "80px",
                  borderTopRightRadius: "30px",
                  borderBottomRightRadius: "30px",
                }}
                src={empimg}
              />
            </Col>
          </Row>
        </Container>
        <br />
        <br />

        <Row style={{ textAlign: "left" }}>
          <h5 style={{ textAlign: "center" }}>
            Scheduled Tasks This{" "}
            <select
              style={{
                borderColor: "none",
                borderWidth: "0",
                borderWidth: "0 0  2px 0",
                height: "30px",
                width: "100px",
                borderRadius: "5px",
                backgroundColor: "rgb(155, 160, 181)",
              }}
            >
              <option value="ManagingLeads" selected>
                {""} Week
              </option>
              <option value="Management"> Month</option>
              <option value="Management"> Year</option>
              <option value="Management"> Today</option>
            </select>
            {"  "}
          </h5>
        </Row>
        <br />
        <Row>
          <Col md="4" lg="4">
            Start:
            <DatePicker
              backgroundColor="rgb(155, 160, 181)"
              style={{
                borderWidth: "0",
                borderWidth: "0 0  2px 0",
                height: "30px",
                width: "100px",
                borderRadius: "5px",
                backgroundColor: "rgb(155, 160, 181)",
              }}
              selected={this.state.startDate}
            />
          </Col>
          <Col
            md="4"
            lg="4"
            style={{
              textAlign: "center",
            }}
          >
            <b>
              {" "}
              <Clock
                format={"HH:mm:ss"}
                ticking={true}
                timezone={"IND/GMT +5:30"}
              />
              (GMT +5:30)
            </b>
          </Col>
          <Col md="3" lg="3" style={{ textAlign: "right" }}>
            <Button>My Activities</Button>
          </Col>
          <Col md="1" lg="1">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FiList />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <br />
        <Row>
          <Table
            striped
            bordered
            style={{ backgroundColor: "green", hover: "red" }}
            hover={{
              backgroundColor: "black",
            }}
          >
            <thead style={{ backgroundColor: "rgb(215, 150, 33)" }}>
              <tr>
                <th></th>
                <th>
                  <h5 style={{ textAlign: "center" }}>Monday</h5>
                  <p style={{ fontSize: "10px", textAlign: "center" }}>11/11</p>
                </th>
                <th>
                  <h5 style={{ textAlign: "center" }}>Tuesday</h5>
                  <p style={{ fontSize: "10px", textAlign: "center" }}>12/11</p>
                </th>
                <th>
                  <h5 style={{ textAlign: "center" }}>Wednesday</h5>
                  <p style={{ fontSize: "10px", textAlign: "center" }}>13/11</p>
                </th>
                <th>
                  <h5 style={{ textAlign: "center" }}>Thursday</h5>
                  <p style={{ fontSize: "10px", textAlign: "center" }}>14/11</p>
                </th>
                <th>
                  <h5 style={{ textAlign: "center" }}>Friday</h5>
                  <p style={{ fontSize: "10px", textAlign: "center" }}>15/11</p>
                </th>
                <th>
                  <h5 style={{ textAlign: "center" }}>Saturday</h5>
                  <p style={{ fontSize: "10px", textAlign: "center" }}>16/11</p>
                </th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "#FFFACD" }}>
              <tr>
                <th scope="row">First-Half</th>
                <td>task</td>
                <td>task</td>
                <td>task</td>
                <td>task</td>
                <td>task</td>
                <td>task</td>
              </tr>

              <tr>
                <th scope="row">Second-Half</th>
                <td>task</td>
                <td>task</td>
                <td>task</td>
                <td>task</td>
                <td>task</td>
                <td>task</td>
              </tr>
              
            </tbody>
          </Table>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
