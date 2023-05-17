import React from "react";
import Fonts from "src/components/shared/CETypography";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import { Select as AntSelect } from "antd";
import SvgIcon from "src/components/shared/SvgIcon";
import styles from "./select.module.scss";
import "./select.scss";

const Select = (props) => {
  const { label, selectProps } = props;
  const { required = false, name = "", ...restSelectProps } = selectProps || {};
  return (
    <div className={styles.selectWrapper}>
      {!!label && (
        <label htmlFor={name}>
          <Fonts variant={VARIANTS.labels}>
            {label}{" "}
            {required ? (
              <Fonts as="span" variant={VARIANTS.requireIndication}>
                *
              </Fonts>
            ) : (
              ""
            )}
          </Fonts>
        </label>
      )}
      <AntSelect
        placeholder="Enter your response"
        className="antSelectOverride"
        name={name}
        id={name}
        suffixIcon={<SvgIcon name="dropdown" size={{ h: 8, w: 8 }} />}
        {...restSelectProps}
      />
    </div>
  );
};

export default Select;
