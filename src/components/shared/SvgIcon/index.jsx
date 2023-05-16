import classNames from "classnames";
import SVG from "react-inlinesvg";

const SvgIcon = (props) => {
  const { name, size = { h: 36, w: 36 }, className = "", ...rest } = props;
  return (
    <SVG
      src={`./../../../../public/assets/svg/${name}.svg`}
      height={size.h}
      width={size.w}
      className={classNames({ [className]: className })}
      {...rest}
    />
  );
};

export default SvgIcon;
