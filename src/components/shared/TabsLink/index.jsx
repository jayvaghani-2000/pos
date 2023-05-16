import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Fonts from "src/components/shared/CETypography";
import styles from "./tabsLink.module.scss";
import { VARIANTS } from "../CETypography/variants";

const TabsLink = (props) => {
  const { to, text, iconCmp, active = false, className } = props;

  const configureClass = classNames(styles.tabLink, {
    [styles.active]: active,
    [className]: className,
  });

  return (
    <Link to={to}>
      <div className={configureClass}>
        {!!iconCmp && iconCmp}
        <Fonts
          className={classNames({ [styles.activeLinkText]: active })}
          variant={active ? VARIANTS[1] : VARIANTS[0]}
        >
          {text}
        </Fonts>
      </div>
    </Link>
  );
};

export default TabsLink;
