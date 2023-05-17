import React from "react";
import { Link } from "react-router-dom";
import SvgIcon from "src/components/shared/SvgIcon";
import styles from "./header.module.scss"

const HeaderLogo = () => {
  return (
    <Link to="/home" className={styles.headerLogo}>
      <SvgIcon name="bazaarLogo" size={{ h: 36, w: 210 }} />
    </Link>
  );
};

export default HeaderLogo;
