import classNames from "classnames";
import SVG from "react-inlinesvg";

const SvgIcon = (props) => {
  const { name, size = {}, className = "", ...rest } = props;
  return (
    <SVG
      src={`/assets/svg/${name}.svg`}
      height={size.h}
      width={size.w}
      className={classNames({ [className]: className })}
      {...rest}
    />
  );
};

export default SvgIcon;
