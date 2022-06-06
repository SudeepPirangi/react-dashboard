import React from "react";
import { Divider } from "rsuite";

import SalesHeader from "./SalesHeader";
import SalesVisuals from "./SalesVisuals";
import SalesMetrics from "./SalesMetrics";
import styles from "./SalesDetail.module.css";

function SalesDetail() {
  return (
    <div className="gray-box">
      <SalesHeader />

      <Divider className={styles.horizontalRuler} />

      <div className="row-flex">
        <SalesVisuals />

        <Divider vertical className={styles.verticalRuler} />

        <SalesMetrics />
      </div>
    </div>
  );
}

export default SalesDetail;
