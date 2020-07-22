import React, { Component, useState } from "react";
import plogo from "../../assets/img/brand/plogo.png";
import { BsPencilSquare } from "react-icons/bs";
import { TiLocationArrow } from "react-icons/ti";
import ShowMoreText from "react-show-more-text";
import {
  Badge,
  Button,
  Card,
  CardBody,
  ButtonGroup,
  Collapse,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Table,
  CardText,
  CardSubtitle,
  CardImg,
  Container,
} from "reactstrap";
import "./Profile.css";
import { withRouter } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.onImageChange = this.onImageChange.bind(this);
    this.state = {
      img: plogo,
      showone: false,
      showtwo: false,
      showthree: false,
    };
  }
  handleClick(event) {
    document.getElementById("myimg").click();
  }
  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let im = event.target.files[0];
      this.setState({
        img: URL.createObjectURL(im),
      });
    }
  };

  render() {
    const buttonstyle = {
      color: "white",
      backgroundColor: "#6E4EE4",
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
      <div style={{ backgroundColor: "white", paddingTop: "20px" }}>
        <Container style={{ height: "400px" }}>
          <div className="c1"></div>
          <Card
            className="p1"
            style={{ position: "absolute", backgroundColor: "whitesmoke" }}
          >
            <Row
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                display: "flex",
                marginTop: "15px",
              }}
            >
              <Col style={{ textAlign: "center" }}>
                <p>
                  <b>10</b>
                </p>
                <p style={{ fontSize: "13px" }}>Total Projects</p>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <p>
                  <b>10</b>
                </p>
                <p style={{ fontSize: "13px" }}>Completed Projects</p>
              </Col>

              <Col style={{ textAlign: "center" }}>
                <p>
                  <b>10</b>
                </p>
                <p style={{ fontSize: "13px" }}>Current Projects</p>
              </Col>

              <Col>
                <div>
                  <img
                    className="i1"
                    name="img"
                    value={this.state.img}
                    src={"https://source.unsplash.com/random"}
                    style={{
                      borderRadius: "50%",
                      width: "120px",
                      height: "120px",
                      position: "fixed",
                      marginTop: "-90px",
                      backgroundColor: "#BED6D6",
                      position: "absolute",
                    }}
                    onClick={this.handleClick}
                  />
                  <input
                    type="file"
                    name="myImage"
                    id="myimg"
                    onChange={this.onImageChange}
                    hidden
                  />
                </div>
              </Col>
              <Col xs="5">
                <Button
                  color="secondary"
                  style={{
                    float: "right",
                    marginRight: "20px",
                    color: "white",
                    backgroundColor: "black",
                    borderStyle: "none",
                  }}
                >
                  <BsPencilSquare /> edit Profile
                </Button>
              </Col>
            </Row>
            <CardBody>
              <CardText style={{ textAlign: "center" }}>
                <h1
                  style={{
                    fontFamily: "Sofia",
                  }}
                >
                  {" "}
                  <i
                    style={{
                      fontFamily: "Sofia",
                    }}
                  >
                    Sravan Kumar Reddy Vudem
                  </i>
                  ,24
                </h1>
              </CardText>
              <CardSubtitle
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "10px",
                  fontSize: "13px",
                }}
              >
                Software Trainee
              </CardSubtitle>
              <CardSubtitle
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              >
                Pronteff IT Solutions.
              </CardSubtitle>
              <CardText
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <i>
                  <b>Madhapur , Hyderabad</b>
                </i>
              </CardText>
            </CardBody>
          </Card>
        </Container>{" "}
        <br />
        {/* Upper Card Ends */}
        <Container>
          <Row>
            <Col sm="12" md="4" lg="4" className="col1">
              <Button
                color="primary"
                onClick={toggle}
                style={{ marginBottom: "1rem" }}
              >
                Toggle
              </Button>
              <Collapse isOpen={isOpen}>
                <div
                  style={{
                    padding: "10px",
                    backgroundColor: "#B0BEC5 ",
                    borderRadius: "5px",
                  }}
                >
                  {/* Lower left Started  */}
                  <div>
                    <h2>Tech Stack</h2>
                    <h4>Worked Projects</h4>
                  </div>
                  <div>
                    <Button style={buttonstyle}>IBM</Button>
                    <Button style={buttonstyle}>Facebook</Button>
                    <Button style={buttonstyle}>AI</Button>
                    <Button style={buttonstyle}>Google</Button>
                  </div>
                  <br />
                  <div>
                    <h6>Known Technologies</h6>
                    <Button style={buttonstyle}>Reactjs</Button>
                    <Button style={buttonstyle}>Nodejs</Button>
                    <Button style={buttonstyle}>Native</Button>
                    <Button style={buttonstyle}>JAVA</Button>
                  </div>{" "}
                  <br />
                  <div>
                    <h6>Known Languages</h6>
                    <Button style={buttonstyle}>Telegu</Button>
                    <Button style={buttonstyle}>English</Button>
                    <Button style={buttonstyle}>Hindi</Button>
                    <Button style={buttonstyle}>Punjabi</Button>
                  </div>
                  <br />
                  <div>
                    <h2>Languages</h2>
                    <p>
                      Professional Working Proficiency in{" "}
                      <b>English and Telugu</b>
                    </p>
                  </div>
                </div>
              </Collapse>
            </Col>

            <Col md="auto" lg="auto" style={{ padding: "0 20px 0 20px" }}>
              {/* Lower Right Card Starts */}
              <div
                style={{
                  padding: "10px 20px 5px 20px",
                  backgroundColor: "whitesmoke",
                }}
              >
                <h3 style={{ color: "#303F9F " }}>General Informations</h3>
                <div>
                  <ul>
                    <li>
                      <h3>Work Experience</h3>
                    </li>
                  </ul>

                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <ButtonGroup>
                      <Button
                        style={{ backgroundColor: "#303F9F", color: "white" }}
                      >
                        4 jobs Occupied
                      </Button>
                    </ButtonGroup>

                    <ButtonGroup>
                      <Button
                        style={{ backgroundColor: "#303F9F ", color: "white" }}
                      >
                        3 Years Experience
                      </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                      <Button
                        style={{ backgroundColor: "#303F9F ", color: "white" }}
                      >
                        32 Total months Worked{" "}
                      </Button>
                    </ButtonGroup>
                  </div>
                  <br />
                  <br />
                  <Card>
                    <CardBody>
                      <h2>Pass To Park IT</h2>
                      <h5 style={{ color: "#303F9F " }}>PHP and Nodejs</h5>
                      <p>
                        <span style={{ float: "left" }}>
                          April 2017-Present-1yrs 2mon
                        </span>
                        <span style={{ float: "right" }}>
                          <TiLocationArrow />
                          Hyderabad,INDIA
                        </span>
                      </p>
                      <p style={{ clear: " both" }}></p>
                      <ShowMoreText
                        /* Default options */
                        lines={6}
                        more="Show more"
                        less="Show less"
                        anchorClass=""
                        onClick={this.executeOnClick}
                        expanded={false}
                        width={280}
                      >
                        Ipsum lorem dolores aliquyam dolor ut sed gubergren no
                        elitr, dolor sit diam magna ut vero et sea sit, no stet
                        duo rebum nonumy ipsum justo amet. Et et sea nonumy et
                        erat et et et. Labore sea amet sea elitr, rebum rebum ea
                        diam lorem. Amet vero takimata amet dolor, clita dolores
                        aliquyam sit amet, rebum gubergren ea et eos sit, vero
                        takimata amet est sit at. Sit eos ipsum diam magna. No
                        sit gubergren sea sea tempor invidunt. Magna et erat
                        tempor takimata labore ipsum et et, clita ea et dolore
                        eirmod et stet dolores consetetur. Rebum diam elitr at
                        diam ipsum, et labore dolor et sed dolor dolor diam no,
                        et aliquyam duo tempor lorem, dolor est amet dolor et
                        labore. Sit amet amet ea et sit sed diam diam. Takimata
                        voluptua sit vero nonumy vero sea diam, nonumy vero
                        consetetur rebum elitr sed consetetur tempor, est kasd
                        stet diam dolor sed diam clita sea eos. Takimata no
                        aliquyam kasd duo stet, voluptua diam labore justo est
                      </ShowMoreText>
                      <br />

                      <br />
                    </CardBody>
                    <hr />
                    <CardBody>
                      <h2>Gold Menu</h2>
                      <h5 style={{ color: "#303F9F " }}>
                        React-Native and Nodejs
                      </h5>
                      <p>
                        <span style={{ float: "left" }}>
                          April 2017-Present-1yrs 2mon
                        </span>
                        <span style={{ float: "right" }}>
                          <TiLocationArrow />
                          Hyderabad,INDIA
                        </span>
                      </p>
                      <br />
                      <ShowMoreText
                        /* Default options */
                        lines={6}
                        more="Show more"
                        less="Show less"
                        anchorClass=""
                        onClick={this.executeOnClick}
                        expanded={false}
                        width={280}
                        style={{ overflow: "auto" }}
                      >
                        Ipsum lorem dolores aliquyam dolor ut sed gubergren no
                        elitr, dolor sit diam magna ut vero et sea sit, no stet
                        duo rebum nonumy ipsum justo amet. Et et sea nonumy et
                        erat et et et. Labore sea amet sea elitr, rebum rebum ea
                        diam lorem. Amet vero takimata amet dolor, clita dolores
                        aliquyam sit amet, rebum gubergren ea et eos sit, vero
                        takimata amet est sit at. Sit eos ipsum diam magna. No
                        sit gubergren sea sea tempor invidunt. Magna et erat
                        tempor takimata labore ipsum et et, clita ea et dolore
                        eirmod et stet dolores consetetur. Rebum diam elitr at
                        diam ipsum, et labore dolor et sed dolor dolor diam no,
                        et aliquyam duo tempor lorem, dolor est amet dolor et
                        labore. Sit amet amet ea et sit sed diam diam. Takimata
                        voluptua sit vero nonumy vero sea diam, nonumy vero
                        consetetur rebum elitr sed consetetur tempor, est kasd
                        stet diam dolor sed diam clita sea eos. Takimata no
                        aliquyam kasd duo stet, voluptua diam labore justo est
                      </ShowMoreText>
                      <br />
                    </CardBody>
                    <hr />
                    <CardBody>
                      <h2>Kanobi</h2>
                      <h5 style={{ color: "#303F9F " }}>React Js</h5>
                      <p>
                        <span style={{ float: "left" }}>
                          April 2017-Present-1yrs 2mon
                        </span>
                        <span style={{ float: "right" }}>
                          <TiLocationArrow />
                          Hyderabad,INDIA
                        </span>
                      </p>
                      <br />
                      <ShowMoreText
                        /* Default options */
                        lines={6}
                        more="Show more"
                        less="Show less"
                        anchorClass=""
                        onClick={this.executeOnClick}
                        expanded={false}
                        width={280}
                      >
                        Ipsum lorem dolores aliquyam dolor ut sed gubergren no
                        elitr, dolor sit diam magna ut vero et sea sit, no stet
                        duo rebum nonumy ipsum justo amet. Et et sea nonumy et
                        erat et et et. Labore sea amet sea elitr, rebum rebum ea
                        diam lorem. Amet vero takimata amet dolor, clita dolores
                        aliquyam sit amet, rebum gubergren ea et eos sit, vero
                        takimata amet est sit at. Sit eos ipsum diam magna. No
                        sit gubergren sea sea tempor invidunt. Magna et erat
                        tempor takimata labore ipsum et et, clita ea et dolore
                        eirmod et stet dolores consetetur. Rebum diam elitr at
                        diam ipsum, et labore dolor et sed dolor dolor diam no,
                        et aliquyam duo tempor lorem, dolor est amet dolor et
                        labore. Sit amet amet ea et sit sed diam diam. Takimata
                        voluptua sit vero nonumy vero sea diam, nonumy vero
                        consetetur rebum elitr sed consetetur tempor, est kasd
                        stet diam dolor sed diam clita sea eos. Takimata no
                        aliquyam kasd duo stet, voluptua diam labore justo est
                      </ShowMoreText>
                    </CardBody>
                    <CardBody>
                      <h2>RPF</h2>
                      <h5 style={{ color: "#303F9F " }}>React Js and PHP</h5>
                      <p>
                        <span style={{ float: "left" }}>
                          April 2017-Present-1yrs 2mon
                        </span>
                        <span style={{ float: "right" }}>
                          <TiLocationArrow />
                          Hyderabad,INDIA
                        </span>
                      </p>
                      <br />
                      <ShowMoreText
                        /* Default options */
                        lines={6}
                        more="Show more"
                        less="Show less"
                        anchorClass=""
                        onClick={this.executeOnClick}
                        expanded={false}
                        width={280}
                      >
                        Ipsum lorem dolores aliquyam dolor ut sed gubergren no
                        elitr, dolor sit diam magna ut vero et sea sit, no stet
                        duo rebum nonumy ipsum justo amet. Et et sea nonumy et
                        erat et et et. Labore sea amet sea elitr, rebum rebum ea
                        diam lorem. Amet vero takimata amet dolor, clita dolores
                        aliquyam sit amet, rebum gubergren ea et eos sit, vero
                        takimata amet est sit at. Sit eos ipsum diam magna. No
                        sit gubergren sea sea tempor invidunt. Magna et erat
                        tempor takimata labore ipsum et et, clita ea et dolore
                        eirmod et stet dolores consetetur. Rebum diam elitr at
                        diam ipsum, et labore dolor et sed dolor dolor diam no,
                        et aliquyam duo tempor lorem, dolor est amet dolor et
                        labore. Sit amet amet ea et sit sed diam diam. Takimata
                        voluptua sit vero nonumy vero sea diam, nonumy vero
                        consetetur rebum elitr sed consetetur tempor, est kasd
                        stet diam dolor sed diam clita sea eos. Takimata no
                        aliquyam kasd duo stet, voluptua diam labore justo est
                      </ShowMoreText>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
