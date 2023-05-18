import styles from "./candidates.module.scss";
import SvgIcon from "src/components/shared/SvgIcon/index.jsx";
import Fonts from "src/components/shared/CETypography";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import React from "react";

const Candidates = () => {
  return (
    <div className={styles.candidatesWrapper}>
      <div className={styles.candidatesBackground}>
        <SvgIcon name="candidatesBgBanner" size={{ h: 550, w: 515 }} />
      </div>
      <Fonts variant={VARIANTS.header0} className={styles.header}>
        Candidates
      </Fonts>
    </div>
  );
};

export default Candidates;
