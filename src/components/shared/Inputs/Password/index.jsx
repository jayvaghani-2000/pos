import Fonts from "src/components/shared/CETypography";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import SvgIcon from "src/components/shared/SvgIcon";
import { useState } from "react";
import { Input } from "antd";
import styles from "./password.module.scss";

const { Password: AntdPassword } = Input;

const Password = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { label, inputProps } = props;
  const { required = false, name = "", ...restInputProps } = inputProps || {};

  return (
    <div className={styles.inputWrapper}>
      {!!label && (
        <label htmlFor={name}>
          <Fonts variant={VARIANTS.labels}>
            {label}{" "}
            {required ? (
              <Fonts as="span" variant={VARIANTS.requireIndication}>
                *
              </Fonts>
            ) : (
              ""
            )}
          </Fonts>
        </label>
      )}
      <AntdPassword
        placeholder="* * * * * * * *"
        required={required}
        className={styles.inputField}
        name={name}
        id={name}
        iconRender={(visible) => (
          <SvgIcon
            name={visible ? "showPassword" : "hidePassword"}
            onClick={() => setShowPassword((prev) => !prev)}
            size={{ w: 25, h: 25 }}
          />
        )}
        {...restInputProps}
      />
    </div>
  );
};

export default Password;
