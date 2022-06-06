import React from "react";
import { Button } from "rsuite";
import { FaRegPlusSquare } from "react-icons/fa";

import OrderTiles from "./OrderTiles";
import SalesDetail from "./SalesDetail/SalesDetail";
import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div id="dashboard" className={styles.dashboard}>
      <div className={styles.overview}>
        <h1>Overview</h1>
        <Button color="red" appearance="primary">
          <FaRegPlusSquare /> ADD NEW WINE
        </Button>
      </div>

      <OrderTiles />

      <h2 style={{ fontSize: "1.1em", marginTop: "15px" }}>Sales detail</h2>

      <SalesDetail />
    </div>
  );
}

export default Dashboard;
