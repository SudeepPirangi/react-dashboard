import React from "react";
import { Button } from "rsuite";
import { FaRegPlusSquare } from "react-icons/fa";

import OrderTiles from "./OrderTiles";
import SalesDetail from "./SalesDetail/SalesDetail";
import Inventory from "./Inventory/Inventory";
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

      <h2 className={styles.subHeading}>Sales detail</h2>

      <SalesDetail />

      <h2 className={styles.subHeading}>Inventory</h2>

      <Inventory />
    </div>
  );
}

export default Dashboard;
