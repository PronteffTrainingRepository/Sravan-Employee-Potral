import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import logo from '../../../assets/img/plogo.png'
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empid: "",
      empidError: "",
      password: "",
      passwordError: "",
      validated : ""
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    if (event.target.name === "empid") {
      this.setState({ empidError: "" });
    }
    if (event.target.name === "password") {
      this.setState({ passwordError: "" });
    }
  }

  validate = () => {
    let empidError = "";
    let passwordError = "";

    if (!this.state.empid) {
      empidError = "Empid  is required!";
    }

    if (!this.state.password) {
      passwordError = "Password is required!";
    }

    if (empidError || passwordError) {
      this.setState({ empidError, passwordError });
      // let err = empidError;
      // let err1 = passwordError;
      // if (err && err1) {
      //   alert("empid and password is required");
      // } else if (err) {
      //   alert(err);
      // } else if (err1) {
      //   alert(err1);
      // }

      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    const isValid = this.validate();
    if (isValid) {
      // return <Redirect to="/dashboard/" />;
      this.props.history.push("/dashboard");
    } else {
      console.log(this.event);
    }
     event.preventDefault();
  };
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{
                    backgroundImage: "linear-gradient(90deg,#4A5973,#931257)",
                    width: "44%",
                  }}
                >
                  <CardBody
                    className="text-center"
                    style={{ justifyContent: "center" }}
                  >
                    <h4 style={{ color: "#E8B167" }}> EMPLOYEE LOGIN PORTAL</h4>
                    <img src={logo} style={{height:'200px',width:'200px'}} />
                    
                  </CardBody>
                </Card>

                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.handleSubmit} method="POST">
                      <h3>Employee Login</h3>

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="EmployeeID"
                          name="empid"
                          id="InputID"
                          value={this.state.empid}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                      <span style={{ fontSize: 12, color: "red" }}>
                        <b>{this.state.empidError}</b>
                      </span>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Password"
                          name="password"
                          id="PasswordId"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                      <span style={{ fontSize: 12, color: "red" }}>
                        <b>{this.state.passwordError}</b>
                      </span>

                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">
                            Login
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button type="submit" color="link" className="px-0">
                            Forgot password?
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
          {/* <Row className="justify-content-center">
            {" "}
            <Link to={"/"}>Back to dashboard</Link>
          </Row> */}
        </Container>
     
      </div>
    );
  }
}

export default Login;
