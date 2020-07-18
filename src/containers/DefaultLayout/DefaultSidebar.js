import React, { Component } from "react";
import { NavItem, NavLink, Navbar, Nav } from "reactstrap";

const footer = {
  position: "fixed",
  left: "0",
  bottom: " 0",
  backgroundColor: "black",
  color: "white",
  height: "40px",
  width: "150px",
  borderRadius: "20px",

  textAlign: "center",
};

export class DefaultSidebar extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", lineHeight: "0.8" }}>
        <div>
          <br />
          <img
            src={"https://source.unsplash.com/random"}
            className="img-avatar"
            style={{ height: "100px", width: "100px" }}
          />
          <br />
          <br />
          <h5>Sravan Kumar Reddy</h5>
          <a href="#">View My profile</a>
        </div>
        <br />
        <div>
          <Navbar color="black" light toggleable={true}>
            <Nav navbar>
              <NavItem>
                <NavLink style={{ color: "white" }} href="#">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "white" }} href="#">
                  Projects Details
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "white" }} href="#">
                  Intrests
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "white" }} href="#">
                  Github
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "white" }} href="#">
                  Hobbies
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "white" }} href="#">
                  Form
                </NavLink>
              </NavItem>
              <NavItem style={{ position: "bottom" }}>
                <NavLink style={{ color: "white" }} href="#">
                  Loans
                </NavLink>
              </NavItem>
              <NavItem style={{ position: "bottom" }}>
                <NavLink>
                  <button style={footer}>Logout</button>
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          {/* <footer
            style={footer}
            class="col-sm-12 col-md-12 col-lg-12 bordered footer"
          >
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                height: "40px",
                width: "150px",
                borderRadius: "20px",
              }}
            >
              Logout
            </button>
          </footer> */}
        </div>
      </div>
    );
  }
}

export default DefaultSidebar;
