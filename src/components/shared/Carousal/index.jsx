import Slider from "react-slick";
import styles from './carousal.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './carousal.scss'
import { CustomDot, NextButton, PrevButton } from "./helperButton";

function Carousal({ content }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    dotsClass: 'slick-dots custom-dots',
    customPaging: (i) => <CustomDot key={i} />,
  };
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {content}
      </Slider>
    </div>
  );
}

export default Carousal;