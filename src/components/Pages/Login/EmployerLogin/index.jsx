import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./employerLogin.module.scss";
import Text from "src/components/shared/Inputs/Text";
import Password from "src/components/shared/Inputs/Password";
import Fonts from "src/components/shared/CETypography";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import CEButton from "src/components/shared/Buttons/CEButton";
import OutlineButton from "src/components/shared/Buttons/OutlineButton";

const EmployerLogin = () => {
  const navigate = useNavigate();

  const handleRegisterEmployee = () => {
    navigate("/register/employer");
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.fieldWrapper}>
        <Text
          label="Company Email ID"
          inputProps={{
            placeholder: "Please enter your company email id",
            required: true,
            name: "email",
          }}
        />
        <Password
          label="Password"
          inputProps={{
            placeholder: "Please enter your password",
            required: true,
            name: "password",
          }}
        />
      </div>
      <div className={styles.forgotPassword}>
        <Link to="/forgot-password">
          <Fonts variant={VARIANTS.link}>Forgot Password?</Fonts>
        </Link>
      </div>
      <div className={styles.actionsWrapper}>
        <CEButton
          suffixIconName={"rightArrow"}
          iconProps={{ size: { h: 19, w: 19 } }}
        >
          Login
        </CEButton>
        <OutlineButton onClick={handleRegisterEmployee}>
          <Fonts
            variant={VARIANTS.outlineButton}
            className={styles.registerAction}
          >
            Don’t have an account?
            <Fonts variant={VARIANTS.outlineButtonBold}>Register now</Fonts>
          </Fonts>
        </OutlineButton>
      </div>
    </div>
  );
};

export default EmployerLogin;
