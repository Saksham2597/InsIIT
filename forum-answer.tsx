import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./forum-answer.module.css";

const ForumAnswer = () => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/forum");
  }, [router]);

  return (
    <div className={styles.forumAnswer}>
      <div className={styles.forumPageContent}>
        <div className={styles.forumContent}>
          <div className={styles.questionDisplayParent}>
            <div className={styles.questionDisplay}>
              <div className={styles.questionContainer}>
                <div className={styles.mainQuestionHeadingContainer}>
                  <p className={styles.mainQuestionHeading}>
                    <b className={styles.mainQuestionHeading1}>
                      Main question heading?
                    </b>
                  </p>
                  <p className={styles.theSubheadingOf}>
                    The subheading of the question to display more details of
                    the question.
                  </p>
                </div>
                <div className={styles.tagContainer}>
                  <div className={styles.tagWrapper}>
                    <b className={styles.tag}>Aerospace</b>
                  </div>
                  <div className={styles.tagFrame}>
                    <b className={styles.tag}>Research</b>
                  </div>
                </div>
                <b className={styles.askedByJohn}>asked by John Doe</b>
              </div>
            </div>
            <b className={styles.answers}>Answers</b>
            <div className={styles.questionDisplay1}>
              <div className={styles.questionContainer}>
                <b className={styles.answers}>Answer 1</b>
                <div className={styles.mainAnswerLorem}>
                  Main answer. Lorem ipsum dolot sit amet, consecutur
                  adisipicisng elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua
                </div>
                <b className={styles.askedByJohn}>
                  answered by Jane Doe | 25 Dec 2077
                </b>
              </div>
            </div>
            <div className={styles.questionDisplay1}>
              <div className={styles.questionContainer}>
                <b className={styles.answers}>Answer 2</b>
                <div className={styles.mainAnswerLorem}>
                  Another main answer. Lorem ipsum dolot sit amet, consecutur
                  adisipicisng elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua
                </div>
                <b className={styles.askedByJohn}>
                  answered by Jane Doe | 25 Dec 2077
                </b>
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
                  <p className={styles.mainQuestionHeading}>
                    <b className={styles.mainQuestionHeading1}>InsIIT</b>
                  </p>
                  <p className={styles.theSubheadingOf}>
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
      <div className={styles.vectorParent} onClick={onFrameContainerClick}>
        <div
          className={styles.frameChild}
          width={23}
          height
          alt=""
          src="/arrow-3.svg"
        />
        <b className={styles.back}> Back</b>
      </div>
    </div>
  );
};

export default ForumAnswer;
