import React from "react";
import SvgIcon from "src/components/shared/SvgIcon";
import CETabs from "src/components/shared/CETabs";
import TabsLink from "src/components/shared/TabsLink";
import { isActive } from "src/utils/activeRoute";
import { useLocation } from "react-router-dom";
import Fonts from "src/components/shared/CETypography";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import styles from "./register.module.scss";
import RegisterEmployer from "src/components/Pages/Register/RegisterEmployer";

const Register = () => {
  const location = useLocation();
  const TabContent = (children) => {
    return <div className={styles.tabContentWrapper}>{children}</div>;
  };

  return (
    <div className={styles.registerWrapper}>
      <SvgIcon
        name="bazaarLogoWithTxt"
        size={{ w: 101 }}
        className={styles.logo}
      />

      <div className={styles.registerForm}>
        <div className={styles.header}>
          <Fonts variant={VARIANTS.header}>Register</Fonts>
          <Fonts variant={VARIANTS.instruction}>
            Please sign up to continue
          </Fonts>
        </div>
        <CETabs
          wrapperClassName="overRideTabsGap"
          activeKey={location.pathname}
          items={[
            {
              label: (
                <TabsLink
                  iconCmp={<SvgIcon name="candidate" size={{ h: 36, w: 36 }} />}
                  text="Candidate"
                  to="/register/candidate"
                  active={
                    isActive("/register/candidate", location) ||
                    ["/register", "/register/"].includes(location.pathname)
                  }
                />
              ),
              key: ["/register", "/register/"].includes(location.pathname)
                ? location.pathname
                : "/register/candidate",
              children: TabContent(<h3>Candidate login form</h3>),
            },
            {
              label: (
                <TabsLink
                  iconCmp={<SvgIcon name="employer" size={{ h: 36, w: 36 }} />}
                  text="Employer"
                  to="/register/employer"
                  active={isActive("/register/employer", location)}
                />
              ),
              key: "/register/employer",
              children: TabContent(<RegisterEmployer />),
            },
          ]}
        />
      </div>

      <SvgIcon
        name="registerBgBanner"
        className={styles.bgBanner}
        size={{ w: 719, h: 466 }}
      />
    </div>
  );
};

export default Register;
