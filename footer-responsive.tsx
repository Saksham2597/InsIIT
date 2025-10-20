import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./footer-responsive.module.css";

const FooterResponsive = ({ className = "" }) => {
  return (
    <div className={[styles.footerResponsive, className].join(" ")}>
      <div className={styles.footerContainer}>
        <div className={styles.row1}>
          <div className={styles.insiitAllTheInsightsYouNe}>
            <div className={styles.insiitAllTheContainer}>
              <p className={styles.insiit}>
                <b className={styles.insiit1}>InsIIT</b>
              </p>
              <p className={styles.allTheInsights}>All the insights you need</p>
            </div>
          </div>
          <div className={styles.developedByStudents}>
            Developed by students of IIT Hyderabad
          </div>
          <div className={styles.socialMedia}>
            <div className={styles.socialMediaInner}>
              <div className={styles.instanceChild} />
            </div>
            <div className={styles.socialMediaInner}>
              <div className={styles.instanceChild} />
            </div>
            <div className={styles.socialMediaInner}>
              <div className={styles.instanceChild} />
            </div>
          </div>
        </div>
        <div
          className={styles.footerContainerChild}
          width={1152}
          height={1}
          alt=""
          src="/vector-10.svg"
        />
        <div className={styles.row2}>
          <div className={styles.column1}>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.aboutUs}>Contact Us</div>
            <div className={styles.aboutUs}>Devs</div>
          </div>
          <div className={styles.column1}>
            <div className={styles.aboutUs}>About IITH</div>
            <div className={styles.aboutUs}>Link 2</div>
            <div className={styles.aboutUs}>Link 3</div>
          </div>
          <div className={styles.column1}>
            <div className={styles.aboutUs}>Link 1</div>
            <div className={styles.aboutUs}>Link 2</div>
            <div className={styles.aboutUs}>Link 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterResponsive.propTypes = {
  className: PropTypes.string,
};

export default FooterResponsive;
