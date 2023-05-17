import React from "react";
import Text from "src/components/shared/Inputs/Text";
import Password from "src/components/shared/Inputs/Password";
import styles from "./registerEmployer.module.scss";
import Select from "src/components/shared/Inputs/Select";
import SvgIcon from "src/components/shared/SvgIcon";
import CEButton from "src/components/shared/Buttons/CEButton";
import OutlineButton from "src/components/shared/Buttons/OutlineButton";
import Fonts from "src/components/shared/CETypography";
import Checkbox from "src/components/shared/Inputs/Checkbox";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import { useNavigate } from "react-router-dom";

const RegisterEmployer = () => {
  const navigate = useNavigate();

  const handleLoginEmployee = () => {
    navigate("/login/employer");
  };

  return (
    <div className={styles.registerEmployerWrapper}>
      <div className={styles.formWrapper}>
        <Text
          label="Company Name"
          inputProps={{
            placeholder: "Enter company name",
            required: true,
            name: "companyName",
          }}
        />
        <Text
          label="Contact Number"
          inputProps={{
            placeholder: "1234567890",
            required: true,
            name: "contactNumber",
            prefix: "+91",
            type: "number",
          }}
        />
        <Text
          label="Location"
          inputProps={{
            placeholder: "Location",
            required: true,
            name: "location",
            suffix: <SvgIcon name="location" size={{ h: 24 }} />,
          }}
        />
        <Select
          label="Designation"
          selectProps={{
            placeholder: "Enter your designation",
            name: "designation",
            options: [
              { value: "hr", label: "Human Resource" },
              { value: "recruiter", label: "Recruiter" },
            ],
          }}
        />
        <Text
          label="company Website"
          inputProps={{
            placeholder: "Enter company website url",
            name: "companyWebsite",
          }}
        />
        <Text
          label="company Email ID"
          inputProps={{
            placeholder: "Enter your company email ID",
            required: true,
            name: "companyEmail",
          }}
        />

        <Password
          label="Set Password"
          helperTxt="Atleast six characters, one number(0-9), a symbol i.e $,*@"
          inputProps={{
            required: true,
            name: "password",
          }}
        />
        <Password
          label="Confirm Password"
          inputProps={{
            required: true,
            name: "confirmPassword",
          }}
        />
      </div>
      <div className={styles.actionWrapper}>
        <Checkbox>
          <Fonts variant={VARIANTS.checkboxLabel}>
            I agree with{" "}
            <Fonts
              variant={VARIANTS.checkboxLabelMarron}
              as="a"
              href="https://google.com/"
              target="_blank"
              className={styles.term}
              onClick={(e) => e.stopPropagation()}
            >
              CB T & C *
            </Fonts>
            and{" "}
            <Fonts
              variant={VARIANTS.checkboxLabelMarron}
              as="a"
              href="https://google.com/"
              target="_blank"
              className={styles.term}
              onClick={(e) => e.stopPropagation()}
            >
              Privacy Policy *
            </Fonts>
          </Fonts>
        </Checkbox>
        <CEButton>Register</CEButton>
        <OutlineButton onClick={handleLoginEmployee}>
          <Fonts
            variant={VARIANTS.outlineButton}
            className={styles.registerAction}
          >
            Already have an account?
            <Fonts variant={VARIANTS.outlineButtonBold}>Login</Fonts>
          </Fonts>
        </OutlineButton>
      </div>
    </div>
  );
};

export default RegisterEmployer;
