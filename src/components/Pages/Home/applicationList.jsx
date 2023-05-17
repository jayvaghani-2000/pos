import Fonts from "../../shared/CETypography";
import { VARIANTS } from "../../shared/CETypography/variants";
import Carousal from "../../shared/Carousal";
import ProgressBar from "../../shared/ProgressBar";
import SvgIcon from "../../shared/SvgIcon";
import styles from "./applicationList.module.scss";

const ApplicationArray = [
  {
    name: "Avinash kumar Jha",
    role: "PHP Develope",
    experience: "3 years",
    currentLocation: "Pune",
    currentCTC: "60,000",
    noticePeriod: "30 days",
    skillsMatched: "75%",
  },
  {
    name: "Avinash kumar Jha",
    role: "PHP Develope",
    experience: "3 years",
    currentLocation: "Pune",
    currentCTC: "60,000",
    noticePeriod: "30 days",
    skillsMatched: "75%",
  },
  {
    name: "Avinash kumar Jha",
    role: "PHP Develope",
    experience: "3 years",
    currentLocation: "Pune",
    currentCTC: "60,000",
    noticePeriod: "30 days",
    skillsMatched: "75%",
  },
  {
    name: "Avinash kumar Jha444",
    role: "PHP Develope",
    experience: "3 years",
    currentLocation: "Pune",
    currentCTC: "60,000",
    noticePeriod: "30 days",
    skillsMatched: "75%",
  },
];

const ApplicationList = () => {
  const getDetails = (key, value) => {
    return (
      <div>
        <Fonts variant={VARIANTS.labels2}>{key}</Fonts>
        <Fonts variant={VARIANTS.labels3}>{value}</Fonts>
      </div>
    );
  };
  const getContent = () => {
    return ApplicationArray.map((a) => (
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
            <Fonts variant={VARIANTS.labels}>{a.role}</Fonts>
            <Fonts variant={VARIANTS.labels5} className={styles.status}>
              Open to work
            </Fonts>
          </div>
        </div>
        <div className={styles.skillPercentageWrapper}>
          <div className={styles.skillLabel}>Skills Matched</div>
          <div className={styles.percentage}>{a.skillsMatched}</div>
        </div>
        <div className={styles.progressbar}>
          <ProgressBar percent={75} showInfo={false} className="userSkill" />
        </div>
        <div className={styles.professionalDetails}>
          {getDetails("Relevant Experience:", a.experience)}
          {getDetails("Location:", a.currentLocation)}
          {getDetails("Current CTC:", a.currentCTC)}
          {getDetails("Notice period:", a.noticePeriod)}
        </div>
      </div>
    ));
  };
  return (
    <div>
      <Carousal content={getContent()} />
    </div>
  );
};

export default ApplicationList;
