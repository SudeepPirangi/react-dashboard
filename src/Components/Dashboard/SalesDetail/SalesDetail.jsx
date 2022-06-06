import React from "react";
import { FaChartLine, FaSyncAlt } from "react-icons/fa";
import { Divider, Dropdown } from "rsuite";

import SalesChart from "./SalesChart";
import styles from "./SalesDetail.module.css";

function SalesDetail() {
  return (
    <div style={{ border: `1px solid var(--dull-grey)`, borderRadius: "5px" }}>
      <div className={styles.salesHeader}>
        <div className="col-flex" style={{ flex: "1" }}>
          <strong>Total Sales Overview</strong>
          <span>7 - 13 Aug, 2020</span>
        </div>
        <div className="row-flex">
          <span>
            <FaSyncAlt style={{ marginBottom: "-2px" }} /> &nbsp;Refresh Metrics
          </span>
        </div>
        <div className="row-flex" style={{ alignItems: "center" }}>
          <span>Filter by</span>
          <Divider vertical />
          <Dropdown title="This Week" placement="bottomEnd" className={styles.customDropdown}>
            <Dropdown.Item>This Month</Dropdown.Item>
            <Dropdown.Item>This Year</Dropdown.Item>
          </Dropdown>
        </div>
      </div>

      <Divider className={styles.horizontalRuler} />

      <div className="row-flex">
        <div className={styles.visualData}>
          <div className="row-flex space-between" style={{ alignItems: "center" }}>
            <span className={styles.graphTotal}>$74.729.00</span>
            <strong>
              <FaChartLine style={{ marginBottom: "-2px", color: "var(--green)" }} />
              &nbsp; Highest revenue since 2 weeks ago
            </strong>
          </div>
          <span className={styles.profitPercent}>
            <FaChartLine style={{ marginBottom: "-2px" }} />
            &nbsp;+21% from last week
          </span>
          <div style={{ padding: "20px 10px" }}>
            <SalesChart />
          </div>
        </div>
        <Divider vertical className={styles.verticalRuler} />
        <div className={styles.metrics}>
          <span className={styles.totalProfit}>Total Profit</span>
          <span className={styles.profitFigure}>$12,545.00</span>
          <span className={styles.profitPercent}>
            <FaChartLine style={{ marginBottom: "-2px" }} />
            &nbsp;+23% from last week
          </span>
          <span className={styles.totalProfit}>Total Products Sold</span>
          <span className={styles.totalSold}>329</span>
        </div>
      </div>
    </div>
  );
}

export default SalesDetail;
