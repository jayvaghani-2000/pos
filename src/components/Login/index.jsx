import React from "react";
import SvgIcon from "src/components/shared/SvgIcon";
import CETabs from "src/components/shared/CETabs";
import TabsLink from "src/components/shared/TabsLink";
import styles from "./login.module.scss";
import { isActive } from "../../utils/activeRoute";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();

  return (
    <div className={styles.loginWrapper}>
      <SvgIcon
        name="bazaarLogoWithTxt"
        size={{ w: 101 }}
        className={styles.logo}
      />

      <div className={styles.loginForm}>
        <CETabs
          wrapperClassName="overRideTabsGap"
          activeKey={location.pathname}
          items={[
            {
              label: (
                <TabsLink
                  iconCmp={<SvgIcon name="candidate" />}
                  text="Candidate"
                  to="/login/candidate"
                  active={isActive("/login/candidate", location)}
                />
              ),
              key: ["/login", "/login/"].includes(location.pathname)
                ? location.pathname
                : "/login/candidate",
              children: <>aaa</>,
            },
            {
              label: (
                <TabsLink
                  iconCmp={<SvgIcon name="employer" />}
                  text="Employer"
                  to="/login/employer"
                  active={isActive("/login/employer", location)}
                />
              ),
              key: "/login/employer",
              children: <>bbb</>,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Login;
