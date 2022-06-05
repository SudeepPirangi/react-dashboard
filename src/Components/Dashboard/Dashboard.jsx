import React from "react";
import { Button } from "rsuite";
import { FaRegPlusSquare } from "react-icons/fa";

import Styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div id="dashboard" className={Styles.Dashboard}>
      <div className={Styles.Overview}>
        <h1>Overview</h1>
        <Button color="red" appearance="primary">
          <FaRegPlusSquare /> ADD NEW WINE
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
