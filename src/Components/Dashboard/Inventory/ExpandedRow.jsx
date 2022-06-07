import React from "react";
import { Button, Divider } from "rsuite";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import styles from "./ExpandedRow.module.css";

const ExpandedRow = (rowData) => {
  return (
    <div className={styles.expansion}>
      <div className="row-flex align-center space-between">
        <div className="col-flex">
          <strong>{rowData.firstName}</strong>
          <span>
            <strong>Region:</strong> {rowData.street} - {rowData.city} - {rowData.zipCode}&nbsp;
            <strong style={{ marginLeft: "15px" }}>Vintage:</strong> 2010
          </span>
        </div>
        <div className="row-flex align-center flex-end">
          <Button appearance="link" style={{ color: "var(--primary)" }}>
            View wine
          </Button>
          &nbsp;
          <FaEdit style={{ color: "var(--primary)", marginLeft: "10px" }} />
          &nbsp;
          <FaTrashAlt style={{ color: "var(--dull-grey)", marginLeft: "10px" }} />
        </div>
      </div>

      <Divider style={{ margin: "10px 0" }} />

      <div className="row-flex">
        <div className={styles.w50}>
          <p>Rating</p>
          <div className={styles.rowWrap}>
            {ratings.map((rating, index) => (
              <Stat classname="blue" key={index} statName={rating.statName} stat={rating.stat} />
            ))}
          </div>
        </div>
        <div className={styles.w50}>
          <p>Stock</p>
          <div className={styles.rowWrap}>
            {stocks.map((stock, index) => (
              <Stat classname="red" key={index} statName={stock.statName} stat={stock.stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ratings = [
  { statName: "James Suckling's", stat: "JS 95" },
  { statName: "Robert Parker", stat: "RP 80" },
  { statName: "Antonio galloni's", stat: "--" },
  { statName: "Wine Spectator Tasting", stat: "WS 79" },
];
const stocks = [
  { statName: "Possimus", stat: "43 units" },
  { statName: "Downtown Condo", stat: "95 units" },
];

const Stat = ({ classname, statName, stat }) => {
  return (
    <div className={styles[classname]}>
      <strong>{statName}</strong>
      <span>{stat}</span>
    </div>
  );
};

export default ExpandedRow;
