import Image from "next/image";
import styles from "./jo-s-a-a.module.css";

const JoSAA = () => {
  return (
    <div className={styles.josaa}>
      <div className={styles.josaaPageContent}>
        <div className={styles.examContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.instanceChild} />
            <div
              className={styles.image7}
              width={74}
              height={74}
              alt=""
              src="/image-7@2x.png"
            />
            <div className={styles.jeeMains}>JEE Mains</div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.instanceChild} />
            <div className={styles.jeeAdvanced}>JEE Advanced</div>
            <div
              className={styles.image8}
              width={144}
              height={106}
              alt=""
              src="/image-8@2x.png"
            />
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
                  <div className={styles.instanceInner} />
                </div>
                <div className={styles.socialMediaInner}>
                  <div className={styles.instanceInner} />
                </div>
                <div className={styles.socialMediaInner}>
                  <div className={styles.instanceInner} />
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

export default JoSAA;
