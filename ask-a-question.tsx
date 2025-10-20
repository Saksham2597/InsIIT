import Image from "next/image";
import styles from "./ask-a-question.module.css";

const AskAQuestion = () => {
  return (
    <div className={styles.askAQuestion}>
      <div className={styles.askAQuestionContent}>
        <div className={styles.questionPostingContent}>
          <div className={styles.searchBar}>
            <div className={styles.searchBarChild} />
            <div className={styles.searchBarItem} />
            <div className={styles.searchParent}>
              <b className={styles.search}> Search</b>
              <div
                className={styles.iconSearch}
                width={21}
                height={21}
                alt=""
                src="/-icon-search.svg"
              />
            </div>
            <b className={styles.search1}>Search</b>
          </div>
          <div className={styles.questionAskBar}>
            <b className={styles.addTags}>{`Add Tags : `}</b>
            <div className={styles.questionAskBarChild} />
            <b className={styles.enterQuestion}>Enter question</b>
            <div className={styles.questionTags}>
              <div className={styles.tagWrapper}>
                <b className={styles.tag}>Acadmeics</b>
              </div>
              <div className={styles.tagWrapper}>
                <b className={styles.tag}>Research</b>
              </div>
              <div className={styles.tagWrapper}>
                <b className={styles.tag}>Mechanical</b>
              </div>
              <div className={styles.tagWrapper}>
                <b className={styles.tag}>clubs</b>
              </div>
              <div className={styles.tagWrapper1}>
                <b className={styles.tag}>+</b>
              </div>
            </div>
            <div className={styles.button}>
              <b className={styles.tag}>Post Question</b>
            </div>
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

export default AskAQuestion;
