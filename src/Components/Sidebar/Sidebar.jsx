import React from "react";
import { Sidenav, Nav } from "rsuite";
import { FaLaptop, FaLayerGroup, FaShoppingBasket, FaUserFriends, FaRegFileAlt, FaRegSun } from "react-icons/fa";

import Copyright from "../CommonUI/Copyright";

function Sidebar() {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState("1");
  return (
    <div style={{ width: expanded ? "240px" : "auto", height: "100%" }}>
      <Sidenav expanded={expanded} defaultOpenKeys={["3", "4"]}>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item eventKey="1" icon={<FaLaptop />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<FaLayerGroup />}>
              Inventory
            </Nav.Item>
            <Nav.Item eventKey="3" icon={<FaShoppingBasket />}>
              Orders
            </Nav.Item>
            <Nav.Item eventKey="4" icon={<FaUserFriends />}>
              Customers
            </Nav.Item>
            <Nav.Item eventKey="5" icon={<FaRegFileAlt />}>
              Reports
            </Nav.Item>
            <Nav.Item eventKey="6" icon={<FaRegSun />}>
              Settings
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
        <Copyright expanded={expanded} />
        <Sidenav.Toggle expanded={expanded} onToggle={(expanded) => setExpanded(expanded)}></Sidenav.Toggle>
      </Sidenav>
    </div>
  );
}
export default Sidebar;
