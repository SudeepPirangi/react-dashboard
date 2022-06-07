import React from "react";
import { Table } from "rsuite";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const { Cell } = Table;

const ExpandCell = ({ rowData, dataKey, expandedRowKeys, onChange, ...props }) => (
  <Cell {...props}>
    {expandedRowKeys.some((key) => key === rowData[dataKey]) ? (
      <FaCaretUp
        onClick={() => {
          onChange(rowData);
        }}
      />
    ) : (
      <FaCaretDown
        onClick={() => {
          onChange(rowData);
        }}
      />
    )}
  </Cell>
);

export default ExpandCell;
