import React from "react";
import { Button } from "antd";
import SvgIcon from "src/components/shared/SvgIcon";
import Fonts from "src/components/shared/CETypography";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import styles from "./ceButton.module.scss";
import classNames from "classnames";

const CEButton = (props) => {
  const {
    children,
    suffixIconName = "",
    prefixIcon = "",
    iconProps = {},
    childrenProps = {},
    className = "",
    ...rest
  } = props;

  return (
    <Button
      className={classNames(styles.ceButton, { [className]: className })}
      {...rest}
    >
      <div className={styles.textWrapper}>
        {!!prefixIcon && <SvgIcon name={prefixIcon} {...iconProps} />}
        <Fonts variant={VARIANTS.filledButton} {...childrenProps}>
          {children}
        </Fonts>
        {!!suffixIconName && <SvgIcon name={suffixIconName} {...iconProps} />}
      </div>
    </Button>
  );
};

export default CEButton;
