import React from "react";
import styles from "./filterCandidate.module.scss";
import Fonts from "src/components/shared/CETypography";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import Text from "src/components/shared/Inputs/Text";
import Select from "src/components/shared/Inputs/Select";
import OutlineButton from "src/components/shared/Buttons/OutlineButton";
import { useNavigate } from "react-router-dom";

const FilterCandidate = () => {
  const navigate = useNavigate();

  const handleSearchCandidate = () => {
    navigate("/filteredCandidate");
  };

  return (
    <div className={styles.filterCandidateWrapper}>
      <div className={styles.contentWrapper}>
        <Fonts variant={VARIANTS.header1} className={styles.header}>
          Hey!
        </Fonts>
        <Fonts variant={VARIANTS.header2} className={styles.subHeader}>
          Techno Wiz Solutions | CBE120 Welcome to Candidates Bazaar
        </Fonts>
        <div className={styles.filterFormWrapper}>
          <div className={styles.filterForm}>
            <Text
              className={styles.colFraction}
              label="Enter Job Title"
              inputProps={{
                placeholder: "E.g. Web developer ",
                required: true,
                name: "jobTitle",
              }}
            />
            <Select
              className={styles.colFraction}
              label="Select additional Skill(s)"
              selectProps={{
                placeholder: "E.g. AngularJS",
                name: "additionalSkills",
                options: [
                  { value: "angular", label: "Angular Js" },
                  { value: "react", label: "React Js" },
                  { value: "next", label: "Next Js" },
                ],
              }}
            />
            <Select
              label="Salary Range"
              selectProps={{
                required: true,
                placeholder: "Select salary range",
                name: "range",
                options: [
                  { value: "angular", label: "4 lac - 6 lac" },
                  { value: "react", label: "6 lac - 8 lac" },
                  { value: "next", label: "8lac - 10 lac" },
                ],
              }}
            />
            <Select
              label="Relevant Experience"
              selectProps={{
                required: true,
                placeholder: "0 - 3 Yrs",
                name: "experience",
                options: [
                  { value: "angular", label: "0 - 3 Yrs" },
                  { value: "react", label: "3 - 5 Yrs" },
                  { value: "next", label: "5 - 8 Yrs" },
                ],
              }}
            />
            <Text
              className={styles.colFraction}
              label="Certification(s)"
              inputProps={{
                placeholder: "AWS",
                required: true,
                name: "certification",
              }}
            />
          </div>
          <div className={styles.formAction}>
            <OutlineButton
              className={styles.search}
              onClick={handleSearchCandidate}
            >
              Search
            </OutlineButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCandidate;
