import React from "react";
import { Navbar, Nav, Avatar } from "rsuite";
import { FaBell } from "react-icons/fa";

import SearchBox from "../CommonUI/SearchBox";

const SimpleNavbar = () => {
  return (
    <Navbar>
      <Navbar.Brand href="#">CORKOWL</Navbar.Brand>
      <Nav>
        <Nav.Item>
          <SearchBox width={300} />
        </Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav.Item>
          <FaBell style={{ fontSize: "1.5em" }} />
        </Nav.Item>
        <Nav.Menu title={<NamedAvatar />} placement="bottomEnd">
          <Nav.Item>View Profile</Nav.Item>
          <Nav.Item>Logout</Nav.Item>
        </Nav.Menu>
      </Nav>
    </Navbar>
  );
};

export default SimpleNavbar;

const NamedAvatar = () => {
  return (
    <span className="row-flex" styles={{ alignItems: "center" }}>
      Sudeep Pirangi &nbsp; <Avatar size="sm" circle src="https://avatars.githubusercontent.com/u/2797600" alt="@posebear1990" />
    </span>
  );
};
