import React from "react";

const Copyright = ({ expanded }) => {
  const styles = {
    copyright: {
      position: "fixed",
      bottom: 0,
      padding: "0 10px",
      zIndex: 1,
    },
    h3: { fontSize: "0.9rem", lineHeight: "inherit" },
    span: { fontSize: "0.7rem" },
  };
  return (
    expanded && (
      <div style={styles.copyright}>
        <h3 style={styles.h3}>CorkOwl</h3>
        <span style={styles.span}>&copy;2020 CorkOwl. All Rights Reserved.</span>
      </div>
    )
  );
};

export default Copyright;
