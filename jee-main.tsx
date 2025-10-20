import Image from "next/image";
import styles from "./jee-main.module.css";

const JeeMain = () => {
  return (
    <div className={styles.jeeMain}>
      <div className={styles.jeeMainPageContent}>
        <div className={styles.rankMatrix}>
          <div className={styles.rankMatrixChild} />
          <div
            className={styles.vector}
            width={24}
            height={21}
            alt=""
            src="/vector.svg"
          />
          <b className={styles.jeeMain1}>JEE Main</b>
          <div className={styles.rankMatrixItem} />
          <div className={styles.selectYearParent}>
            <b className={styles.selectYear}>Select year</b>
            <div
              className={styles.vector1}
              width={24}
              height={12}
              alt=""
              src="/vector1.svg"
            />
          </div>
          <b className={styles.jeeAttemptYear}>JEE Attempt Year</b>
          <b className={styles.jeeMainRank}>JEE Main Rank</b>
          <b className={styles.institute}>Institute</b>
          <div className={styles.enterYourJeeMainRankWrapper}>
            <div className={styles.enterYourJee}>Enter your JEE Main Rank</div>
          </div>
          <div className={styles.selectInstituteParent}>
            <div className={styles.selectYear}>Select Institute</div>
            <div
              className={styles.vector2}
              width={24}
              height={12}
              alt=""
              src="/vector1.svg"
            />
            <div className={styles.wrapper}>
              <div className={styles.div}>0</div>
            </div>
          </div>
          <div className={styles.button}>
            <b className={styles.button1}>Predict Now</b>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerContainer}>
            <div className={styles.row1}>
              <div className={styles.insiitAllTheInsightsYouNe}>
                <div className={styles.insiitAllTheContainer}>
                  <p className={styles.insiit}>
                    <b className={styles.insiit1}>InsIIT</b>
                  </p>
                  <p className={styles.allTheInsights}>
                    All the insights you need
                  </p>
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
      </div>
      <div className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.menuItems}>
            <div className={styles.menuItemlogoParent}>
              <div className={styles.menuItemlogo}>
                <div className={styles.menuItemlogoChild} />
                <div
                  className={styles.subtract}
                  width={96}
                  height={94}
                  alt=""
                  src="/subtract.svg"
                />
                <b className={styles.insiit2}>INSIIT</b>
              </div>
              <div className={styles.menuItem}>
                <div className={styles.menuItem1}>Ask a Question</div>
              </div>
              <div className={styles.menuItem2}>
                <div className={styles.menuItem1}>Insights</div>
              </div>
              <div className={styles.menuItem4}>
                <div className={styles.menuItem1}>JoSAA</div>
              </div>
              <div className={styles.menuItem6}>
                <div className={styles.menuItem1}>Forum</div>
              </div>
              <div className={styles.menuItem8}>
                <div className={styles.menuItem1}>Login</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JeeMain;
