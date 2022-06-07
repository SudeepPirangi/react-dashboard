import React from "react";
import { Table, Checkbox } from "rsuite";

const { Cell } = Table;

const CheckBoxCell = ({ rowData, onChange, checkedKeys, dataKey, ...props }) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div style={{ lineHeight: "46px" }}>
      <Checkbox value={rowData[dataKey]} inline onChange={onChange} checked={checkedKeys.some((item) => item === rowData[dataKey])} />
    </div>
  </Cell>
);

export default CheckBoxCell;
