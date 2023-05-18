import styles from "./candidates.module.scss";
import SvgIcon from "src/components/shared/SvgIcon/index.jsx";
import Fonts from "src/components/shared/CETypography";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import React, { useState } from "react";
import CETabs from "src/components/shared/CETabs";
import classNames from "classnames";
import CategorizedCandidates from "src/components/Pages/Home/Candidates/CategorizedCandidates";
import { TAB_KEY } from "./constant";

const Candidates = () => {
  const [activeTab, setActiveTab] = useState(TAB_KEY.favorite);
  return (
    <div className={styles.candidatesWrapper}>
      <div className={styles.candidatesBackground}>
        <SvgIcon name="candidatesBgBanner" size={{ h: 550, w: 515 }} />
      </div>

      <CETabs
        defaultActiveKey={TAB_KEY.favorite}
        activeKey={activeTab}
        onChange={(tab) => setActiveTab(tab)}
        items={[
          {
            label: (
              <Fonts
                className={classNames({
                  [styles.activeLinkText]: activeTab === TAB_KEY.favorite,
                })}
                variant={
                  activeTab === TAB_KEY.favorite
                    ? VARIANTS.activeTab
                    : VARIANTS.inactiveTab1
                }
              >
                Favorite candidates
              </Fonts>
            ),
            key: TAB_KEY.favorite,
            children: <CategorizedCandidates tab={TAB_KEY.favorite} />,
          },
          {
            label: (
              <Fonts
                className={classNames({
                  [styles.activeLinkText]: activeTab === TAB_KEY.shortlisted,
                })}
                variant={
                  activeTab === TAB_KEY.shortlisted
                    ? VARIANTS.activeTab
                    : VARIANTS.inactiveTab1
                }
              >
                Shortlisted candidates
              </Fonts>
            ),
            key: TAB_KEY.shortlisted,
            children: <CategorizedCandidates tab={TAB_KEY.shortlisted} />,
          },
        ]}
      />
    </div>
  );
};

export default Candidates;
