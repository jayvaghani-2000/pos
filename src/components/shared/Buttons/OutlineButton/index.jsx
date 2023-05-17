import React from "react";
import { Button } from "antd";
import SvgIcon from "src/components/shared/SvgIcon";
import Fonts from "src/components/shared/CETypography";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import styles from "./outlineButton.module.scss";
import classNames from "classnames";

const OutlineButton = (props) => {
  const {
    children,
    className,
    suffixIconName = "",
    iconProps = {},
    ...rest
  } = props;

  return (
    <Button
      className={classNames(styles.outlineButton, { [className]: className })}
      {...rest}
    >
      <div className={styles.textWrapper}>
        <Fonts variant={VARIANTS.outlineButton}>{children}</Fonts>
        {!!suffixIconName && <SvgIcon name={suffixIconName} {...iconProps} />}
      </div>
    </Button>
  );
};

export default OutlineButton;
