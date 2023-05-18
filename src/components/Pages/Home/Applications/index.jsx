import styles from "./applications.module.scss";
import SvgIcon from "src/components/shared/SvgIcon/index.jsx";
import Fonts from "src/components/shared/CETypography";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import Carousal from "src/components/shared/Carousal";
import Slider from "src/components/shared/Slider";
import React from "react";
import OutlineButton from "src/components/shared/Buttons/OutlineButton";
import { APPLICATIONS } from "./constant";
import { useNavigate } from "react-router-dom";

const Applications = () => {
  const navigate = useNavigate();
  const getDetails = (key, value, className) => {
    return (
      <div className={className}>
        <Fonts variant={VARIANTS.labels2}>{key}</Fonts>
        <Fonts variant={VARIANTS.labels3}>{value}</Fonts>
      </div>
    );
  };

  const toIndianCurrency = (num) => {
    const curr = num.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      maximumSignificantDigits: (num + "").replace(".", "").length,
    });
    return curr;
  };

  const getContent = () => {
    return APPLICATIONS.map((a) => (
      <div className={styles.userDetailContainer}>
        <div className={styles.personalDetailWrapper}>
          <SvgIcon
            name="userIcon"
            size={{ w: 64, h: 65 }}
            className={styles.userIcon}
          />
          <div className={styles.personalDetails}>
            <Fonts variant={VARIANTS.labels4} className={styles.name}>
              {a.name}
            </Fonts>
            <Fonts variant={VARIANTS.labels6}>{a.role}</Fonts>
            <Fonts variant={VARIANTS.labelsGreen} className={styles.status}>
              {a.workStatus}
            </Fonts>
          </div>
        </div>

        <div className={styles.skillPercentageWrapper}>
          <Fonts variant={VARIANTS.labels7} className={styles.skillLabel}>
            Skills Matched
          </Fonts>
          <Fonts variant={VARIANTS.labels8} className={styles.percentage}>
            {a.skillsMatched}%
          </Fonts>
        </div>
        <Slider value={75} />
        <div className={styles.professionalDetails}>
          {getDetails("Relevant Experience:", a.experience)}
          {getDetails("Location:", a.currentLocation, styles.alignRight)}
          {getDetails("Current CTC:", toIndianCurrency(a.currentCTC))}
          {getDetails("Notice period:", a.noticePeriod, styles.alignRight)}
        </div>
      </div>
    ));
  };

  const handleSeeAllApplication = () => {
    navigate("/applications");
  };

  return (
    <div className={styles.applicationWrapper}>
      <div className={styles.applicationBackground}>
        <SvgIcon name="applicationBgBanner" size={{ h: 451, w: 479 }} />
      </div>
      <Fonts variant={VARIANTS.header0} className={styles.header}>
        Applications
      </Fonts>
      <div className={styles.applications}>
        <Carousal content={getContent()} />
      </div>
      <div className={styles.action}>
        <OutlineButton
          className={styles.viewAll}
          onClick={handleSeeAllApplication}
          childrenProps={{ variant: VARIANTS.labels4 }}
        >
          View All
        </OutlineButton>
      </div>
    </div>
  );
};

export default Applications;
