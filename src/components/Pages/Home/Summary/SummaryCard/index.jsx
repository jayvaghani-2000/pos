import React from "react";
import SvgIcon from "src/components/shared/SvgIcon/index.jsx";
import Fonts from "src/components/shared/CETypography";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import styles from "./summaryCard.module.scss";

const SummaryCard = (props) => {
  const { iconName, count = 0, label = "Posted Jobs" } = props;
  return (
    <div className={styles.cardWrapper}>
      <SvgIcon name={iconName} size={{ w: 55, h: 75 }} />
      <div className={styles.contentWrapper}>
        <div className={styles.count}>
          <Fonts variant={VARIANTS.header0}>{count}</Fonts>
          <SvgIcon name={"arrowRight"} size={{ w: 16, h: 26 }} />
        </div>
        <Fonts variant={VARIANTS.labels1}>{label}</Fonts>
      </div>
    </div>
  );
};

export default SummaryCard;
