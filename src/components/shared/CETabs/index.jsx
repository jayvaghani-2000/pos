import { Tabs } from "antd";
import classNames from "classnames";
import "./ceTabs.scss";

function CETabs({ wrapperClassName = "", ...rest }) {
  return (
    <div
      className={classNames("overRiderInnerLinkWrapper", {
        [wrapperClassName]: wrapperClassName,
      })}
    >
      <Tabs {...rest} />
    </div>
  );
}

export default CETabs;