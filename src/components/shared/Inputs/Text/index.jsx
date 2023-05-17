import { Input } from "antd";
import classNames from "classnames";
import Fonts from "src/components/shared/CETypography";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import styles from "./text.module.scss";

const Text = (props) => {
  const { label, inputProps, className } = props;
  const { required = false, name = "", ...restInputProps } = inputProps || {};
  return (
    <div
      className={classNames(styles.inputWrapper, { [className]: className })}
    >
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
      <Input
        placeholder="Enter your response"
        required={required}
        className={styles.inputField}
        name={name}
        id={name}
        {...restInputProps}
      />
    </div>
  );
};

export default Text;
