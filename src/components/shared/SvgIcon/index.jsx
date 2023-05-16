import classNames from "classnames";
import SVG from "react-inlinesvg";

const SvgIcon = (props) => {
  const { name, size = { h: 36, width: 36 }, className = "" } = props;
  return (
    <SVG
      src={`./../../../../public/assets/svg/${name}.svg`}
      height={size.h}
      width={size.w}
      className={classNames({ [className]: className })}
    />
  );
};

export default SvgIcon;
