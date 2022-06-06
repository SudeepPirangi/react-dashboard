import React from "react";
import { FlexboxGrid } from "rsuite";
import styles from "./Tile.module.css";

function Tile({ name, icon, data }) {
  return (
    <FlexboxGrid.Item colspan={5} className={styles.tile}>
      <div className={styles.tileInfo}>
        <span className={styles.tileName}>{name}</span>
        {icon}
      </div>
      <span className={styles.tileData}>{data}</span>
    </FlexboxGrid.Item>
  );
}

export default Tile;
