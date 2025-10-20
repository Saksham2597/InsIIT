import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./forum.module.css";

const Forum = () => {
  const router = useRouter();

  const onQuestionDisplayContainerClick = useCallback(() => {
    router.push("/forum-answer");
  }, [router]);

  return (
    <div className={styles.forum}>
      <div className={styles.forumPageContent}>
        <div className={styles.forumContent}>
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
          <div className={styles.tagSearch}>
            <div className={styles.tagSelect}>
              <b className={styles.tags}>Tags</b>
              <div className={styles.instanceParent}>
                <div className={styles.tagWrapper}>
                  <b className={styles.tag}>tag1</b>
                </div>
                <div className={styles.tagContainer}>
                  <b className={styles.tag}>test</b>
                </div>
                <div className={styles.tagContainer}>
                  <b className={styles.tag}>asdf</b>
                </div>
                <div className={styles.tagContainer}>
                  <b className={styles.tag}>tags</b>
                </div>
                <div className={styles.tagWrapper1}>
                  <b className={styles.tag}>Aerospace</b>
                </div>
                <div className={styles.tagWrapper2}>
                  <b className={styles.tag}>Research</b>
                </div>
                <div className={styles.tagWrapper3}>
                  <b className={styles.tag}>Technical Clubs</b>
                </div>
                <div className={styles.tagWrapper4}>
                  <b className={styles.tag}>Benefits</b>
                </div>
                <div className={styles.tagWrapper5}>
                  <b className={styles.tag}>Mechanical</b>
                </div>
                <div className={styles.tagWrapper6}>
                  <b className={styles.tag}>Academics</b>
                </div>
                <div className={styles.tagWrapper7}>
                  <b className={styles.tag}>Extracurriculur</b>
                </div>
                <div className={styles.tagWrapper8}>
                  <b className={styles.tag}>Robotics</b>
                </div>
                <div className={styles.tagWrapper5}>
                  <b className={styles.tag}>Curriculum</b>
                </div>
                <div className={styles.tagWrapper4}>
                  <b className={styles.tag}>Projects</b>
                </div>
                <div className={styles.tagWrapper11}>
                  <b className={styles.tag}>GATE</b>
                </div>
                <div className={styles.tagWrapper12}>
                  <b className={styles.tag}>Software</b>
                </div>
              </div>
            </div>
            <div className={styles.ctaegorySelect}>
              <b className={styles.tags}>Categories</b>
              <div className={styles.instanceGroup}>
                <div className={styles.tagWrapper13}>
                  <b className={styles.tag}>Category 1</b>
                </div>
                <div className={styles.tagWrapper13}>
                  <b className={styles.tag}>Category 2</b>
                </div>
                <div className={styles.tagWrapper13}>
                  <b className={styles.tag}>Category 3</b>
                </div>
                <div className={styles.tagWrapper13}>
                  <b className={styles.tag}>Category 4</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.questionDisplayParent}>
            <div
              className={styles.questionDisplay}
              onClick={onQuestionDisplayContainerClick}
            >
              <div className={styles.questionContainer}>
                <b className={styles.randomQuestionHere}>
                  Random Question, here it is, hi?
                </b>
                <div className={styles.tagContainer1}>
                  <div className={styles.tagWrapper1}>
                    <b className={styles.tag}>Aerospace</b>
                  </div>
                  <div className={styles.tagWrapper18}>
                    <b className={styles.tag}>Research</b>
                  </div>
                </div>
                <b className={styles.askedByJohn}>asked by John Doe</b>
              </div>
            </div>
            <div className={styles.questionDisplay1}>
              <div className={styles.questionContainer}>
                <b className={styles.randomQuestionHere}>
                  Another random question to fill in the space?
                </b>
                <div className={styles.tagContainer1}>
                  <div className={styles.tagWrapper18}>
                    <b className={styles.tag}>Research</b>
                  </div>
                  <div className={styles.tagWrapper7}>
                    <b className={styles.tag}>Extracurriculur</b>
                  </div>
                  <div className={styles.tagWrapper8}>
                    <b className={styles.tag}>Robotics</b>
                  </div>
                </div>
                <b className={styles.askedByJohn}>asked by John Doe</b>
              </div>
            </div>
            <div className={styles.questionDisplay1}>
              <div className={styles.questionContainer}>
                <b className={styles.randomQuestionHere}>
                  One more random Question?
                </b>
                <div className={styles.tagContainer1}>
                  <div className={styles.tagWrapper12}>
                    <b className={styles.tag}>Software</b>
                  </div>
                  <div className={styles.tagWrapper18}>
                    <b className={styles.tag}>Research</b>
                  </div>
                  <div className={styles.tagWrapper4}>
                    <b className={styles.tag}>Benefits</b>
                  </div>
                </div>
                <b className={styles.askedByJohn}>asked by John Doe</b>
              </div>
            </div>
            <div className={styles.questionDisplay1}>
              <div className={styles.questionContainer}>
                <b className={styles.randomQuestionHere}>
                  Ok now last question, bye?
                </b>
                <div className={styles.tagContainer1}>
                  <div className={styles.tagWrapper5}>
                    <b className={styles.tag}>Mechanical</b>
                  </div>
                  <div className={styles.tagWrapper6}>
                    <b className={styles.tag}>Academics</b>
                  </div>
                  <div className={styles.tagWrapper18}>
                    <b className={styles.tag}>Research</b>
                  </div>
                </div>
                <b className={styles.askedByJohn}>asked by John Doe</b>
              </div>
            </div>
          </div>
          <b className={styles.showingEntries4}>Showing entries 4 of 6</b>
          <b className={styles.next}>{`Next `}</b>
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

export default Forum;
