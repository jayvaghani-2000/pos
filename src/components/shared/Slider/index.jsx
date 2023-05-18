import "./slider.scss";
import { Slider as AntSlider } from "antd";

import React from "react";

const Slider = (props) => {
  return (
    <div className="sliderOverride">
      <AntSlider {...props} />
    </div>
  );
};

export default Slider;
