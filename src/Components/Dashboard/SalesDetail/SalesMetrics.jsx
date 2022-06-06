import React from "react";
import { FaChartLine } from "react-icons/fa";

import styles from "./SalesDetail.module.css";

function SalesMetrics() {
  return (
    <div className={styles.metrics}>
      <span className={styles.totalProfit}>Total Profit</span>
      <span className={styles.profitFigure}>$12,545.00</span>
      <span className={styles.profitPercent}>
        <FaChartLine />
        &nbsp;+23% from last week
      </span>
      <span className={styles.totalProfit}>Total Products Sold</span>
      <span className={styles.totalSold}>329</span>
    </div>
  );
}

export default SalesMetrics;
