import React from "react";
import styles from "./header.module.scss";
import HeaderLogo from "src/components/Header/headerLogo";
import CENavigator from "src/components/shared/CENavigator";
import CEButton from "src/components/shared/Buttons/CEButton";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import SvgIcon from "../shared/SvgIcon";
import { Dropdown } from "antd";

const Header = () => {
  const userOptions = [
    {
      key: "1",
      label: "Logout",
    },
  ];
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <HeaderLogo />
      </div>
      <div className={styles.navigatorWrapper}>
        <div className={styles.navigator}>
          <CENavigator prefixIcon={"browseTalent"} to="browseTalent">Browse Talent</CENavigator>
          <CENavigator prefixIcon={"pricing"} to="pricing">Pricing</CENavigator>
        </div>
        <CEButton
          prefixIcon={"post"}
          iconProps={{ size: { h: 16, w: 11 } }}
          childrenProps={{ variant: VARIANTS.filledButtonMaroon }}
          className={styles.postJobAction}
        >
          Post A Job
        </CEButton>

        <div className={styles.notification} data-unseennotification="0">
          <SvgIcon name="bell" size={{ w: 15, h: 17 }} />
        </div>

        <Dropdown
          menu={{
            items: userOptions,
          }}
        >
          <div className={styles.userAvatar}>
            <SvgIcon name="userAvatar" size={{ w: 44, h: 44 }} />
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
