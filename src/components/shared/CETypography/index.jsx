import classNames from "classnames";
import React from "react";
import styles from "./ceTypography.module.scss";

function Fonts(props) {
  const { as: Tag = "div", children, variant = "", className, ...rest } = props;

  const [
    fs = "fs-12",
    lh = "lh-12",
    fw = "fw-4",
    clr = "clr-gray1",
    ff = "ff-roboto",
  ] = variant.split(" ");

  const commonProps = {
    className: classNames(
      styles[fs],
      styles[lh],
      styles[fw],
      styles[clr],
      styles[ff],
      {
        [className]: className,
      }
    ),
    ...rest,
  };

  const getFonts = () => {
    switch (Tag) {
      case "":
        return "";
      default:
        return <Tag {...commonProps}>{children}</Tag>;
    }
  };

  return getFonts();
}

export default Fonts;
