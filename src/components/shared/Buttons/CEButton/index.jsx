import React from "react";
import { Button } from "antd";
import SvgIcon from "src/components/shared/SvgIcon";
import Fonts from "src/components/shared/CETypography";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import styles from "./ceButton.module.scss";

const CEButton = (props) => {
  const { children, suffixIconName = "", iconProps = {}, ...rest } = props;

  return (
    <Button className={styles.ceButton} {...rest}>
      <div className={styles.textWrapper}>
        <Fonts variant={VARIANTS.filledButton}>{children}</Fonts>
        {!!suffixIconName && <SvgIcon name={suffixIconName} {...iconProps} />}
      </div>
    </Button>
  );
};

export default CEButton;
