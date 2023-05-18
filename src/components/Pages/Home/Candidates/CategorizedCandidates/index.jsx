import styles from "./categorizedCandidates.module.scss";
import SvgIcon from "src/components/shared/SvgIcon/index.jsx";
import Slider from "src/components/shared/Slider";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import Fonts from "src/components/shared/CETypography";
import { CANDIDATES, TAB_KEY } from "../constant";
import Carousal from "src/components/shared/Carousal";
import { toIndianCurrency } from "src/utils/helpers";
import OutlineButton from "src/components/shared/Buttons/OutlineButton";
import React from "react";
import { useNavigate } from "react-router-dom";

const CategorizedCandidates = (props) => {
  const navigate = useNavigate();

  const getDetails = (key, value, className) => {
    return (
      <div className={className}>
        <Fonts variant={VARIANTS.labels2}>{key}</Fonts>
        <Fonts variant={VARIANTS.labels3}>{value}</Fonts>
      </div>
    );
  };

  const handleSeeAllApplication = () => {
    if (props.tab === TAB_KEY.favorite) {
      navigate("/favorites");
    } else {
      navigate("/shortlisted");
    }
  };

  const getContent = () => {
    return CANDIDATES.map((a, index) => (
      <div className={styles.userDetailContainer} key={index}>
        <div className={styles.setInterView}>
          <SvgIcon name="interview" size={{ h: 18, w: 24 }} />
          <Fonts
            variant={VARIANTS.requireIndication}
            as="a"
            className={styles.interviewLink}
          >
            Set Interview?
          </Fonts>
        </div>
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
        <div className={styles.satisfyCriteria}>
          <Slider value={75} />
        </div>
        <div className={styles.professionalDetails}>
          {getDetails("Relevant Experience:", a.experience)}
          {getDetails("Location:", a.currentLocation, styles.alignRight)}
          {getDetails("Current CTC:", toIndianCurrency(a.currentCTC))}
          {getDetails("Notice period:", a.noticePeriod, styles.alignRight)}
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.candidateWrapper}>
      <div className={styles.description}>
        <Fonts variant={VARIANTS.header3}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Fonts>
      </div>

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

export default CategorizedCandidates;
