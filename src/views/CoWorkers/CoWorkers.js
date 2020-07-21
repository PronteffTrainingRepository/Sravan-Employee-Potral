import React, { Component, useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Cards from "../../Card";
// import { InputGroup, Input } from "reactstrap";

export class CoWorkers extends Component {
  render() {
    const src = "https://picsum.photos/200";
    return (
      <div>
        <Tabs id="controlled-tab-example">
          <Tab eventKey="employee" title="Employee">
            <span>
              {/* <Row>
              <Col md="4" lg="4">
                <Card>
                  <div style={{ textAlign: "center" }}>
                    <CardImg
                      top
                      src={src}
                      alt="Card image cap"
                      style={{
                        height: "150px",
                        width: "150px",
                        borderRadius: "50%",
                        padding: "10px",
                      }}
                    />
                  </div>

                  <CardBody style={{ textAlign: "center" }}>
                    <CardTitle>
                      <h5>Ramesh Vankayala</h5>
                    </CardTitle>
                    <CardSubtitle>
                      <h6>Director</h6>
                    </CardSubtitle>
                    <CardText style={{ lineHeight: "2" }}>
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        React JS
                      </span>{" "}
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        Node JS
                      </span>{" "}
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        ReactNative
                      </span>{" "}
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        Mongo DB
                      </span>
                    </CardText>
                  </CardBody>
                  <CardFooter>
                    <p>
                      <IoIosPeople style={{ fontSize: "20px" }} /> Director
                    </p>
                    <p>
                      <IoMdApps style={{ fontSize: "20px" }} /> ramesh@gmail.com
                    </p>
                    <p>
                      <IoMdApps style={{ fontSize: "20px" }} /> 12345
                    </p>
                  </CardFooter>
                </Card>
              </Col>

              <Col md="4" lg="4">
                {" "}
                <Card>
                  <div style={{ textAlign: "center" }}>
                    <CardImg
                      top
                      src={src}
                      alt="Card image cap"
                      style={{
                        height: "150px",
                        width: "150px",
                        borderRadius: "50%",
                        padding: "10px",
                      }}
                    />
                  </div>

                  <CardBody style={{ textAlign: "center" }}>
                    <CardTitle>
                      <h5>Vishwanath Vundi</h5>
                    </CardTitle>
                    <CardSubtitle>
                      <h6>Sales Head</h6>
                    </CardSubtitle>
                    <CardText style={{ lineHeight: "2" }}>
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        React JS
                      </span>{" "}
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        Node JS
                      </span>{" "}
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        ReactNative
                      </span>{" "}
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        Mongo DB
                      </span>
                    </CardText>
                  </CardBody>
                  <CardFooter>
                    <p>
                      <IoIosPeople style={{ fontSize: "20px" }} /> FullStack
                    </p>
                    <p>
                      <IoMdApps style={{ fontSize: "20px" }} />{" "}
                      vishwanath@gmail.com
                    </p>
                    <p>
                      <IoMdApps style={{ fontSize: "20px" }} /> 23456
                    </p>
                  </CardFooter>
                </Card>{" "}
              </Col>

              <Col md="4" lg="4">
                <Card>
                  <div style={{ textAlign: "center" }}>
                    <CardImg
                      top
                      src={src}
                      alt="Card image cap"
                      style={{
                        height: "150px",
                        width: "150px",
                        borderRadius: "50%",
                        padding: "10px",
                      }}
                    />
                  </div>

                  <CardBody style={{ textAlign: "center" }}>
                    <CardTitle>
                      <h5>Prashanth Maharana</h5>
                    </CardTitle>
                    <CardSubtitle>
                      <h6>Human Resourse Manager</h6>
                    </CardSubtitle>
                    <CardText style={{ lineHeight: "2" }}>
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        React JS
                      </span>{" "}
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        Node JS
                      </span>{" "}
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        ReactNative
                      </span>{" "}
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        Mongo DB
                      </span>
                    </CardText>
                  </CardBody>
                  <CardFooter>
                    <p>
                      <IoIosPeople style={{ fontSize: "20px" }} /> HR
                    </p>
                    <p>
                      <IoMdApps style={{ fontSize: "20px" }} />{" "}
                      prashanth@gmail.com
                    </p>
                    <p>
                      <IoMdApps style={{ fontSize: "20px" }} /> 34567
                    </p>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4" lg="4">
                {" "}
                <Card>
                  <div style={{ textAlign: "center" }}>
                    <CardImg
                      top
                      src={src}
                      alt="Card image cap"
                      style={{
                        height: "150px",
                        width: "150px",
                        borderRadius: "50%",
                        padding: "10px",
                      }}
                    />
                  </div>

                  <CardBody style={{ textAlign: "center" }}>
                    <CardTitle>
                      <h5>Nikesh Yerneni</h5>
                    </CardTitle>
                    <CardSubtitle>
                      <h6>Senior Software Developer</h6>
                    </CardSubtitle>
                    <CardText style={{ lineHeight: "2" }}>
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        React JS
                      </span>{" "}
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        Node JS
                      </span>{" "}
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        ReactNative
                      </span>{" "}
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        Mongo DB
                      </span>
                    </CardText>
                  </CardBody>
                  <CardFooter>
                    <p>
                      <IoIosPeople style={{ fontSize: "20px" }} /> Developer
                    </p>
                    <p>
                      <IoMdApps style={{ fontSize: "20px" }} /> Nikesh@gmail.com
                    </p>
                    <p>
                      <IoMdApps style={{ fontSize: "20px" }} /> 12345
                    </p>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4" lg="4">
                <Card>
                  <div style={{ textAlign: "center" }}>
                    <CardImg
                      top
                      src={src}
                      alt="Card image cap"
                      style={{
                        height: "150px",
                        width: "150px",
                        borderRadius: "50%",
                        padding: "10px",
                      }}
                    />
                  </div>

                  <CardBody style={{ textAlign: "center" }}>
                    <CardTitle>
                      <h5>Sravan Kumar</h5>
                    </CardTitle>
                    <CardSubtitle>
                      <h6>Software Trainee</h6>
                    </CardSubtitle>
                    <CardText style={{ lineHeight: "2" }}>
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        React JS
                      </span>{" "}
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        Node JS
                      </span>{" "}
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        ReactNative
                      </span>{" "}
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        Mongo DB
                      </span>
                    </CardText>
                  </CardBody>
                  <CardFooter>
                    <p>
                      <IoIosPeople style={{ fontSize: "20px" }} /> Trainee
                    </p>
                    <p>
                      <IoMdApps style={{ fontSize: "20px" }} /> sravan@gmail.com
                    </p>
                    <p>
                      <IoMdApps style={{ fontSize: "20px" }} /> 12345
                    </p>
                  </CardFooter>
                </Card>
              </Col>

              <Col md="4" lg="4">
                <Card>
                  <div style={{ textAlign: "center" }}>
                    <CardImg
                      top
                      src={src}
                      alt="Card image cap"
                      style={{
                        height: "150px",
                        width: "150px",
                        borderRadius: "50%",
                        padding: "10px",
                      }}
                    />
                  </div>

                  <CardBody style={{ textAlign: "center" }}>
                    <CardTitle>
                      <h5>subham</h5>
                    </CardTitle>
                    <CardSubtitle>
                      <h6>Software Trainee</h6>
                    </CardSubtitle>
                    <CardText style={{ lineHeight: "2" }}>
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        React JS
                      </span>{" "}
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        Node JS
                      </span>{" "}
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        ReactNative
                      </span>{" "}
                      <span
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "whitesmoke",
                          border: "1px solid Blue",
                          padding: "0 20px ",
                        }}
                      >
                        Mongo DB
                      </span>
                    </CardText>
                  </CardBody>
                  <CardFooter>
                    <p>
                      <IoIosPeople style={{ fontSize: "20px" }} /> Trainee
                    </p>
                    <p>
                      <IoMdApps style={{ fontSize: "20px" }} /> subham@gmail.com
                    </p>
                    <p>
                      <IoMdApps style={{ fontSize: "20px" }} /> 12345
                    </p>
                  </CardFooter>
                </Card>
              </Col>
            </Row> */}
            </span>
            <Cards />
          </Tab>
          <Tab eventKey="management" title="Management">
            <Cards />
          </Tab>
          <Tab eventKey="shareholders" title="Share Holders">
            <Cards />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default CoWorkers;
