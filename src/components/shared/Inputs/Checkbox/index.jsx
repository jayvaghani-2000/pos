import React from "react";
import { Checkbox as AntCheckbox } from "antd";
import "./checkbox.scss"

const Checkbox = (props) => {
  const { children } = props;
  return <AntCheckbox className="overrideCheckboxStyle">{children}</AntCheckbox>;
};

export default Checkbox;
