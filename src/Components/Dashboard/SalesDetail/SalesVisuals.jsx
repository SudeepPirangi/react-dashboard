import React from "react";
import { FaChartLine } from "react-icons/fa";

import SalesChart from "./SalesChart";
import styles from "./SalesDetail.module.css";

function SalesVisuals() {
  return (
    <div className={styles.visualData}>
      <div className="row-flex space-between" style={{ alignItems: "center" }}>
        <span className={styles.graphTotal}>$74.729.00</span>
        <strong>
          <FaChartLine style={{ color: "var(--green)" }} />
          &nbsp; Highest revenue since 2 weeks ago
        </strong>
      </div>
      <span className={styles.profitPercent}>
        <FaChartLine />
        &nbsp;+21% from last week
      </span>
      <div style={{ padding: "20px 10px" }}>
        <SalesChart />
      </div>
    </div>
  );
}

export default SalesVisuals;
