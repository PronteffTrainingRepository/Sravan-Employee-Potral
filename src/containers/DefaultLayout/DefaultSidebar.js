import React, { Component } from "react";
import {footer, NavItem, NavLink, Navbar, Nav } from "reactstrap";

export class DefaultSidebar extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
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
          <Navbar color="faded" light toggleable={true}>
            <Nav navbar >
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Projects Details</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Intrests</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Github</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Hobbies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Form</NavLink>
              </NavItem>
              <NavItem style={{ position: "bottom" }}>
                <NavLink href="#">Loans</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <footer class="col-sm-12 col-md-12 col-lg-12 bordered footer">
           <button style>Logout</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default DefaultSidebar;
