import React from "react";
import Text from "src/components/shared/Inputs/Text";
import Password from "src/components/shared/Inputs/Password";
import styles from "./registerEmployer.module.scss";
import Select from "src/components/shared/Inputs/Select";
import SvgIcon from "src/components/shared/SvgIcon";

const RegisterEmployer = () => {
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
    </div>
  );
};

export default RegisterEmployer;
