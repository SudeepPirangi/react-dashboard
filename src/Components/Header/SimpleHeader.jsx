import React from "react";
import { Navbar, Nav } from "rsuite";

const SimpleNavbar = () => {
  return (
    <Navbar>
      <Navbar.Brand href="#">CORKOWL</Navbar.Brand>
      <Nav>
        <Nav.Item>Search box</Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav.Menu title="Sudeep Pirangi">
          <Nav.Item>Company</Nav.Item>
          <Nav.Item>Team</Nav.Item>
        </Nav.Menu>
      </Nav>
    </Navbar>
  );
};

export default SimpleNavbar;
