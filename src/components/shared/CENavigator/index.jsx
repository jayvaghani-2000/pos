import styles from "./ceNavigator.module.scss";
import Fonts from "src/components/shared/CETypography";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import React from "react";
import { Link } from "react-router-dom";
import SvgIcon from "src/components/shared/SvgIcon";

const CENavigator = (props) => {
  const { to, prefixIcon, iconProps, children } = props;
  return (
    <Link to={to} className={styles.headerNavigator}>
      <Fonts variant={VARIANTS.navigateLink} className={styles.contentWrapper}>
        {!!prefixIcon && (
          <SvgIcon name={prefixIcon} size={{ h: 16, w: 14 }} {...iconProps} />
        )}
        {children}
      </Fonts>
    </Link>
  );
};

export default CENavigator;
