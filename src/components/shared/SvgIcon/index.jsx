import classNames from "classnames";
import SVG from "react-inlinesvg";
import styles from "./svgIcon.module.scss";

const SvgIcon = (props) => {
  const { name, size = {}, clickable = false, className = "", ...rest } = props;
  return (
    <SVG
      src={`/assets/svg/${name}.svg`}
      height={size.h}
      width={size.w}
      className={classNames({
        [className]: className,
        [styles.clickable]: clickable,
      })}
      {...rest}
    />
  );
};

export default SvgIcon;
