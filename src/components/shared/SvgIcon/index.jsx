import SVG from "react-inlinesvg";

const SvgIcon = (props) => {
  const { name } = props;
  return <SVG src={`public/assets/svg/${name}.svg`} />;
};

export default SvgIcon;
