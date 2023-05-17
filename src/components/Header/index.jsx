import React, { useState, useContext } from "react";
import styles from "./header.module.scss";
import HeaderLogo from "src/components/Header/headerLogo";
import CENavigator from "src/components/shared/CENavigator";
import CEButton from "src/components/shared/Buttons/CEButton";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import SvgIcon from "src/components/shared/SvgIcon";
import { AuthContext } from "src/store/authentication";
import { Dropdown, Modal } from "antd";
import Cookies from "js-cookie";

const Header = () => {
  const { handleSetUserToken, handleSetUser } = useContext(AuthContext);
  const [confirmLogOut, setConfirmLogOut] = useState(false);

  const userOptions = [
    {
      key: "1",
      label: (
        <div
          onClick={() => {
            setConfirmLogOut(true);
          }}
        >
          Logout
        </div>
      ),
    },
  ];

  const handleLogout = () => {
    Cookies.remove("tokenCB");
    handleSetUserToken("");
    handleSetUser({
      isAuthenticated: false,
      user: {},
    });
  };

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <HeaderLogo />
      </div>
      <div className={styles.navigatorWrapper}>
        <div className={styles.navigator}>
          <CENavigator prefixIcon={"browseTalent"} to="browseTalent">
            Browse Talent
          </CENavigator>
          <CENavigator prefixIcon={"pricing"} to="pricing">
            Pricing
          </CENavigator>
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
          <SvgIcon name="bell" size={{ w: 15, h: 17 }} clickable />
        </div>

        <Dropdown
          menu={{
            items: userOptions,
          }}
        >
          <div className={styles.userAvatar}>
            <SvgIcon name="userAvatar" size={{ w: 44, h: 44 }} clickable />
          </div>
        </Dropdown>
      </div>

      <Modal
        title="Confirm"
        open={confirmLogOut}
        cancelText="Cancel"
        okText="Yes"
        onCancel={() => setConfirmLogOut(false)}
        onOk={handleLogout}
        okButtonProps={{ className: styles.okButton }}
        cancelButtonProps={{ className: styles.cancelButton }}
      >
        Are you sure, you want to logout?
      </Modal>
    </div>
  );
};

export default Header;
