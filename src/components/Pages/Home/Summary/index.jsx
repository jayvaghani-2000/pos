import React from "react";
import SummaryCard from "src/components/Pages/Home/Summary/SummaryCard/index.jsx";
import { CARD_DETAILS } from "src/components/Pages/Home/Summary/constant";
import styles from "./summary.module.scss";

const Summary = () => {
  return (
    <div className={styles.summaryWrapper}>
      {CARD_DETAILS.map((i) => (
        <SummaryCard key={i.iconName} {...i} />
      ))}
    </div>
  );
};

export default Summary;
