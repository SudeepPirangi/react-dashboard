import React from "react";
import { FaSyncAlt } from "react-icons/fa";
import { Divider, Dropdown } from "rsuite";

import styles from "./SalesDetail.module.css";

function SalesHeader() {
  return (
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
  );
}

export default SalesHeader;
