import React from "react";
import SvgIcon from "src/components/shared/SvgIcon";
import Fonts from "src/components/shared/CETypography";
import { VARIANTS } from "src/components/shared/CETypography/variants";
import styles from "./footer.module.scss";
import { QUICK_LINKS } from "./constant";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.topWrapper}>
        <div className={styles.bazaarDescription}>
          <SvgIcon name="bazaarLogo" size={{ h: 36, w: 210 }} />
          <Fonts variant={VARIANTS.footerDescription}>
            CandidatesBazaar is a job portal that aims to provide a platform for
            employers to publish verified job openings and for job seekers to
            find and apply for verified job opportunities. The goal of the
            platform is to help connect employers with qualified and reliable
            candidates, while also helping job seekers find legitimate job
            opportunities that align with their skills and experience
          </Fonts>
        </div>
        <div className={styles.verticalDivider} />
        <div className={styles.quickLinks}>
          <Fonts variant={VARIANTS.quickLink}>Quick Links</Fonts>
          <div className={styles.linkWrapper}>
            {QUICK_LINKS.map((i) => (
              <Link to={i.to} key={i.to} className={styles.link}>
                <Fonts variant={VARIANTS.quickLinkText}>{i.label}</Fonts>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.verticalDivider} />
        <div className={styles.contacts}>
          <Fonts variant={VARIANTS.footerContact}>Contact</Fonts>
          <div className={styles.contactWrapper}>
            <div className={styles.contact}>
              <Fonts variant={VARIANTS.footerContact}>Email Us</Fonts>
              <Fonts variant={VARIANTS.footerContactText}>
                info@candidatesbazaar.com
              </Fonts>
              <Fonts variant={VARIANTS.footerContactText}>
                admin@candidatesbazaar.com
              </Fonts>
            </div>
            <div className={styles.contact}>
              <Fonts variant={VARIANTS.footerContact}>Phone Number</Fonts>
              <Fonts variant={VARIANTS.footerContactText}>+91 9876543210</Fonts>
              <Fonts variant={VARIANTS.footerContactText}>+91 9876543210</Fonts>
            </div>
          </div>
        </div>
        <div className={styles.verticalDivider} />
        <div className={styles.appInfo}>
          <Fonts variant={VARIANTS.footerContact}>Download App</Fonts>

          <SvgIcon name="appStore" size={{ h: 38, w: 154 }} />

          <div className={styles.address}>
            <Fonts variant={VARIANTS.footerContact}>Find Us</Fonts>
            <Fonts variant={VARIANTS.footerContactText}>
              Baârez Technology Solutions, Office No 15, Second Floor, Building
              no. 226, Vasant Vihar, Thane – Mumbai, India.
            </Fonts>
          </div>
        </div>
      </div>

      <div className={styles.horizontalDivider}></div>

      <div className={styles.bottomWrapper}>
        <div className={styles.terms}>
          <Fonts variant={VARIANTS.footerContactText}>Terms & conditions</Fonts>
          <Fonts variant={VARIANTS.footerContactText}>Privacy</Fonts>
          <Fonts variant={VARIANTS.footerContactText}>Cookies</Fonts>
        </div>
        <Fonts variant={VARIANTS.license} className={styles.license}>
          © 2023 Candidates Bazaar.com. All Rights Reserved
        </Fonts>

        <div className={styles.socialHandler}>
          <Fonts variant={VARIANTS.footerContactText}>Follow us</Fonts>
          <div className={styles.socialMedia}>
            <a href="https://www.facebook.com/" target={"_blank"}>
              <SvgIcon name="facebookPink" size={{ h: 34, w: 34 }} />
            </a>
            <a href="https://in.linkedin.com/" target={"_blank"}>
              <SvgIcon name="linkedInPink" size={{ h: 34, w: 34 }} />
            </a>
            <a href="https://twitter.com/" target={"_blank"}>
              <SvgIcon name="twitter" size={{ h: 34, w: 34 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
