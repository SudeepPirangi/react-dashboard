import React from "react";
import { Table, Avatar } from "rsuite";

const { Cell } = Table;
const styles = {
  customer: {
    padding: "5px 10px",
  },
  name: {
    fontSize: "14px",
  },
  address: {
    color: "var(--dull-gray)",
    fontSize: "12px",
  },
};

function CustomerCell({ rowData, dataKey, ...props }) {
  return (
    <Cell {...props} style={{ padding: 0 }}>
      <div className="row-flex align-center">
        <Avatar size="sm" square src="https://avatars.githubusercontent.com/u/2797600" alt={rowData["firstName"]} />
        <div className="col-flex" style={styles.customer}>
          <strong style={styles.name}>{rowData["firstName"]}</strong>
          <span style={styles.address}>{`${rowData["street"]} - ${rowData["city"]}`}</span>
        </div>
      </div>
    </Cell>
  );
}

export default CustomerCell;
