import React, { Component } from "react";
// import { Tabs, Tab } from "react-bootstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  CardFooter,
} from "reactstrap";
import { IoIosBriefcase, IoMdApps, IoMdMail } from "react-icons/io";

export class Cards extends Component {
  render() {
    const src = "https://picsum.photos/200";
    return (
      <div>
        {" "}
        <Row>
          <Col sm="6" xs="12" md="4" lg="4">
            <Card
              style={{
                backgroundColor: "#5e2563",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <CardImg
                  top
                  src={src}
                  alt="Card image cap"
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                />
              </div>

              <CardBody style={{ textAlign: "center", color: "white" }}>
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
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    React JS
                  </span>{" "}
                  <span
                    style={{
                      borderRadius: "30px",
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    Node JS
                  </span>{" "}
                  <span
                    style={{
                      borderRadius: "30px",
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    ReactNative
                  </span>{" "}
                  <span
                    style={{
                      borderRadius: "30px",
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    Mongo DB
                  </span>
                </CardText>
              </CardBody>
              <CardFooter>
                <p>
                  <IoIosBriefcase style={{ fontSize: "20px" }} /> Director
                </p>
                <p>
                  <IoMdMail style={{ fontSize: "20px" }} /> ramesh@gmail.com
                </p>
                <p>
                  <IoMdApps style={{ fontSize: "20px" }} /> 12345
                </p>
              </CardFooter>
            </Card>
          </Col>

          <Col sm="6" xs="12" md="4" lg="4">
            {" "}
            <Card
              style={{
                backgroundColor: "#5e2563",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <CardImg
                  top
                  src={src}
                  alt="Card image cap"
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                />
              </div>

              <CardBody style={{ textAlign: "center", color: "white" }}>
                <CardTitle>
                  <h5>Vishwanath Vundi</h5>
                </CardTitle>
                <CardSubtitle>
                  <h6>Head Of Sales </h6>
                </CardSubtitle>
                <CardText style={{ lineHeight: "2" }}>
                  <span
                    style={{
                      borderRadius: "30px",
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    React JS
                  </span>{" "}
                  <span
                    style={{
                      borderRadius: "30px",
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    Node JS
                  </span>{" "}
                  <span
                    style={{
                      borderRadius: "30px",
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    ReactNative
                  </span>{" "}
                  <span
                    style={{
                      borderRadius: "30px",
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    Mongo DB
                  </span>
                </CardText>
              </CardBody>
              <CardFooter>
                <p>
                  <IoIosBriefcase style={{ fontSize: "20px" }} /> FullStack
                </p>
                <p>
                  <IoMdMail style={{ fontSize: "20px" }} /> vishwanath@gmail.com
                </p>
                <p>
                  <IoMdApps style={{ fontSize: "20px" }} /> 23456
                </p>
              </CardFooter>
            </Card>{" "}
          </Col>

          <Col sm="6" xs="12" md="4" lg="4">
            <Card
              style={{
                backgroundColor: "#5e2563",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <CardImg
                  top
                  src={src}
                  alt="Card image cap"
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                />
              </div>

              <CardBody style={{ textAlign: "center", color: "white" }}>
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
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    React JS
                  </span>{" "}
                  <span
                    style={{
                      borderRadius: "30px",
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    Node JS
                  </span>{" "}
                  <span
                    style={{
                      borderRadius: "30px",
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    ReactNative
                  </span>{" "}
                  <span
                    style={{
                      borderRadius: "30px",
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    Mongo DB
                  </span>
                </CardText>
              </CardBody>
              <CardFooter>
                <p>
                  <IoIosBriefcase style={{ fontSize: "20px" }} /> HR
                </p>
                <p>
                  <IoMdMail style={{ fontSize: "20px" }} /> prashanth@gmail.com
                </p>
                <p>
                  <IoMdApps style={{ fontSize: "20px" }} /> 34567
                </p>
              </CardFooter>
            </Card>
          </Col>
          <Col sm="6" xs="12" md="4" lg="4">
            {" "}
            <Card
              style={{
                backgroundColor: "#5e2563",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <CardImg
                  top
                  src={src}
                  alt="Card image cap"
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                />
              </div>

              <CardBody style={{ textAlign: "center", color: "white" }}>
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
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    React JS
                  </span>{" "}
                  <span
                    style={{
                      borderRadius: "30px",
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    Node JS
                  </span>{" "}
                  <span
                    style={{
                      borderRadius: "30px",
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    ReactNative
                  </span>{" "}
                  <span
                    style={{
                      borderRadius: "30px",
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    Mongo DB
                  </span>
                </CardText>
              </CardBody>
              <CardFooter>
                <p>
                  <IoIosBriefcase style={{ fontSize: "20px" }} /> Developer
                </p>
                <p>
                  <IoMdMail style={{ fontSize: "20px" }} /> Nikesh@gmail.com
                </p>
                <p>
                  <IoMdApps style={{ fontSize: "20px" }} /> 12345
                </p>
              </CardFooter>
            </Card>
          </Col>
          <Col sm="6" xs="12" md="4" lg="4">
            <Card
              style={{
                backgroundColor: "#5e2563",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <CardImg
                  top
                  src={src}
                  alt="Card image cap"
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                />
              </div>

              <CardBody style={{ textAlign: "center", color: "white" }}>
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
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    React JS
                  </span>{" "}
                  <span
                    style={{
                      borderRadius: "30px",
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    Node JS
                  </span>{" "}
                  <span
                    style={{
                      borderRadius: "30px",
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    ReactNative
                  </span>{" "}
                  <span
                    style={{
                      borderRadius: "30px",
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    Mongo DB
                  </span>
                </CardText>
              </CardBody>
              <CardFooter>
                <p>
                  <IoIosBriefcase style={{ fontSize: "20px" }} /> Trainee
                </p>
                <p>
                  <IoMdMail style={{ fontSize: "20px" }} /> sravan@gmail.com
                </p>
                <p>
                  <IoMdApps style={{ fontSize: "20px" }} /> 12345
                </p>
              </CardFooter>
            </Card>
          </Col>

          <Col sm="6" xs="12" md="4" lg="4">
            <Card
              style={{
                backgroundColor: "#5e2563",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <CardImg
                  top
                  src={src}
                  alt="Card image cap"
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                />
              </div>

              <CardBody style={{ textAlign: "center", color: "white" }}>
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
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    React JS
                  </span>{" "}
                  <span
                    style={{
                      borderRadius: "30px",
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    Node JS
                  </span>{" "}
                  <span
                    style={{
                      borderRadius: "30px",
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    ReactNative
                  </span>{" "}
                  <span
                    style={{
                      borderRadius: "30px",
                      backgroundColor: "#001f3f",

                      border: "1px solid silver",
                      color: "white",
                      padding: "2px 20px ",
                    }}
                  >
                    Mongo DB
                  </span>
                </CardText>
              </CardBody>
              <CardFooter>
                <p>
                  <IoIosBriefcase style={{ fontSize: "20px" }} /> Trainee
                </p>
                <p>
                  <IoMdMail style={{ fontSize: "20px" }} /> subham@gmail.com
                </p>
                <p>
                  <IoMdApps style={{ fontSize: "20px" }} /> 12345
                </p>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Cards;
