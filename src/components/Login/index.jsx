import React from "react";
import SvgIcon from "src/components/shared/SvgIcon";
import CETabs from "src/components/shared/CETabs";
import TabsLink from "src/components/shared/TabsLink";
import { isActive } from "src/utils/activeRoute";
import { useLocation } from "react-router-dom";
import Fonts from "src/components/shared/CETypography";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import EmployerLogin from "src/components/Login/EmployerLogin";
import styles from "./login.module.scss";

const Login = () => {
  const location = useLocation();

  const TabContent = (children) => {
    return <div className={styles.tabContentWrapper}>{children}</div>;
  };

  return (
    <div className={styles.loginWrapper}>
      <SvgIcon
        name="bazaarLogoWithTxt"
        size={{ w: 101 }}
        className={styles.logo}
      />

      <div className={styles.loginForm}>
        <div className={styles.header}>
          <Fonts variant={VARIANTS.header}>LOGIN</Fonts>
          <Fonts variant={VARIANTS.instruction}>Please Login to continue</Fonts>
        </div>
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
                  active={isActive("/login/candidate", location) || ["/login", "/login/"].includes(location.pathname)}
                />
              ),
              key: ["/login", "/login/"].includes(location.pathname)
                ? location.pathname
                : "/login/candidate",
              children: TabContent(<h3>Candidate login form</h3>),
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
              children: TabContent(<EmployerLogin />),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Login;
