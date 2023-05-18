import Fonts from "src/components/shared/CETypography";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import SvgIcon from "src/components/shared/SvgIcon";
import { Input } from "antd";
import styles from "./password.module.scss";

const { Password: AntdPassword } = Input;

const Password = (props) => {
  const { label, inputProps, helperTxt } = props;
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
            size={{ w: 25, h: 25 }}
            clickable
          />
        )}
        {...restInputProps}
      />
      {!!helperTxt && <Fonts variant={VARIANTS.helperTxt}>{helperTxt}</Fonts>}
    </div>
  );
};

export default Password;
