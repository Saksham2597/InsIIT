import Image from "next/image";
import styles from "./homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.webisteContainer}>
        <div className={styles.titleContent}>
          <div className={styles.titleArea}>
            <div className={styles.titleArea1}>
              <b className={styles.titleWebsite}>Title - Website Headline</b>
              <div className={styles.thisIsA}>
                This is a website by IITH for aspirants that gives easy access
                to reliable information to oncoming freshers, and help make the
                right decision
              </div>
              <div className={styles.button}>
                <b className={styles.button1}>Learn More</b>
              </div>
            </div>
            <div className={styles.titleAreaChild} />
          </div>
        </div>
        <div className={styles.featureSectionContainer}>
          <div className={styles.features}>
            <b className={styles.features1}>Features</b>
            <div className={styles.featureContainer}>
              <div className={styles.featureCard}>
                <b className={styles.headline}>AI Based Rank Matrix</b>
                <div className={styles.thisIsA1}>
                  An AI based rank matrix, to help you get an estimate on your
                  chances to get into your dream university.
                </div>
                <div className={styles.button2}>
                  <b className={styles.button3}>Learn more</b>
                </div>
                <div className={styles.icon} />
              </div>
              <div className={styles.featureCard}>
                <b className={styles.headline}>Public Forum</b>
                <div className={styles.thisIsA1}>
                  A public forum where you can ask any question with answers
                  from reliable sources, the seniors themselves.
                </div>
                <div className={styles.button2}>
                  <b className={styles.button3}>Learn more</b>
                </div>
                <div className={styles.icon1} />
              </div>
              <div className={styles.featureCard}>
                <b className={styles.headline}>Blog</b>
                <div className={styles.thisIsA1}>
                  Want to know more about your university? read up on blogs
                  written by IITians, to know more about campus details, events,
                  social life, and so on
                </div>
                <div className={styles.button2}>
                  <b className={styles.button3}>Learn more</b>
                </div>
                <div className={styles.icon2} />
              </div>
              <div className={styles.featureCard}>
                <b className={styles.headline}>Fourth Feature</b>
                <div className={styles.thisIsA1}>
                  This is a description of the fourth feature of our website. We
                  are going to briefly outline what this feature does.
                </div>
                <div className={styles.button2}>
                  <b className={styles.button3}>Learn more</b>
                </div>
                <div className={styles.icon3} />
              </div>
            </div>
            <div className={styles.button10}>
              <b className={styles.button1}>More about our features</b>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <b className={styles.horizontalCards}>Horizontal Cards</b>
          <div className={styles.horizontalCard}>
            <div className={styles.horizontalCardContainer}>
              <div className={styles.horizontalCardContent}>
                <b className={styles.titleWebsite}>Headline Text</b>
                <div className={styles.horizontalCardDescription}>
                  Horizontal card description - this is where we describe some
                  features or benefits in detail , provide more context, or just
                  show anything we percieve to be important.
                </div>
                <div className={styles.button}>
                  <b className={styles.button1}>Learn more</b>
                </div>
              </div>
              <div className={styles.horizontalCardContainerChild} />
            </div>
          </div>
          <div className={styles.horizontalCard1}>
            <div className={styles.horizontalCardContainer1}>
              <div className={styles.horizontalCardContainerChild} />
              <div className={styles.horizontalCardContent}>
                <b className={styles.titleWebsite}>Headline Text</b>
                <div className={styles.horizontalCardDescription}>
                  Horizontal card description - this is where we describe some
                  features or benefits in detail , provide more context, or just
                  show anything we percieve to be important.
                </div>
                <div className={styles.button}>
                  <b className={styles.button1}>Learn more</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.accordianSection}>
          <div className={styles.accordianContetn}>
            <b className={styles.titleWebsite}>
              Frequently Asked Question (FAQs)
            </b>
            <div className={styles.accordian}>
              <div className={styles.accordian1}>
                <div className={styles.healineButton}>
                  <b className={styles.question1}>Question 1</b>
                  <div className={styles.blogListingbuttonDropdown}>
                    <div
                      className={styles.blogListingbuttonDropdownChild}
                      width={20}
                      height={10}
                      alt=""
                      src="/vector-9.svg"
                    />
                  </div>
                </div>
                <div
                  className={styles.divider}
                  width={561}
                  height
                  alt=""
                  src="/divider.svg"
                />
                <div className={styles.thisIsAn}>
                  This is an answer to a FAQ. Also extra words to show details
                  to the answer, and provide even more detail
                </div>
              </div>
              <div className={styles.accordian1}>
                <div className={styles.healineButton}>
                  <b className={styles.question1}>Question 2</b>
                  <div className={styles.blogListingbuttonDropdown}>
                    <div
                      className={styles.blogListingbuttonDropdownChild}
                      width={20}
                      height={10}
                      alt=""
                      src="/vector-9.svg"
                    />
                  </div>
                </div>
                <div
                  className={styles.divider}
                  width={561}
                  height
                  alt=""
                  src="/divider.svg"
                />
                <div className={styles.thisIsAn}>
                  This is an answer to a FAQ. Also extra words to show details
                  to the answer, and provide even more detail
                </div>
              </div>
              <div className={styles.accordian1}>
                <div className={styles.healineButton}>
                  <b className={styles.question1}>Question 3</b>
                  <div className={styles.blogListingbuttonDropdown}>
                    <div
                      className={styles.blogListingbuttonDropdownChild}
                      width={20}
                      height={10}
                      alt=""
                      src="/vector-9.svg"
                    />
                  </div>
                </div>
                <div
                  className={styles.divider}
                  width={561}
                  height
                  alt=""
                  src="/divider.svg"
                />
                <div className={styles.thisIsAn}>
                  This is an answer to a FAQ. Also extra words to show details
                  to the answer, and provide even more detail
                </div>
              </div>
              <div className={styles.accordian1}>
                <div className={styles.healineButton}>
                  <b className={styles.question1}>Question 4</b>
                  <div className={styles.blogListingbuttonDropdown}>
                    <div
                      className={styles.blogListingbuttonDropdownChild}
                      width={20}
                      height={10}
                      alt=""
                      src="/vector-9.svg"
                    />
                  </div>
                </div>
                <div
                  className={styles.divider}
                  width={561}
                  height
                  alt=""
                  src="/divider.svg"
                />
                <div className={styles.thisIsAn}>
                  This is an answer to a FAQ. Also extra words to show details
                  to the answer, and provide even more detail
                </div>
              </div>
              <div className={styles.accordian1}>
                <div className={styles.healineButton}>
                  <b className={styles.question1}>Question 5</b>
                  <div className={styles.blogListingbuttonDropdown}>
                    <div
                      className={styles.blogListingbuttonDropdownChild}
                      width={20}
                      height={10}
                      alt=""
                      src="/vector-9.svg"
                    />
                  </div>
                </div>
                <div
                  className={styles.divider}
                  width={561}
                  height
                  alt=""
                  src="/divider.svg"
                />
                <div className={styles.thisIsAn}>
                  This is an answer to a FAQ. Also extra words to show details
                  to the answer, and provide even more detail
                </div>
              </div>
              <div className={styles.accordian1}>
                <div className={styles.healineButton}>
                  <b className={styles.question1}>Question 6</b>
                  <div className={styles.blogListingbuttonDropdown}>
                    <div
                      className={styles.blogListingbuttonDropdownChild}
                      width={20}
                      height={10}
                      alt=""
                      src="/vector-9.svg"
                    />
                  </div>
                </div>
                <div
                  className={styles.divider}
                  width={561}
                  height
                  alt=""
                  src="/divider.svg"
                />
                <div className={styles.thisIsAn}>
                  This is an answer to a FAQ. Also extra words to show details
                  to the answer, and provide even more detail
                </div>
              </div>
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

export default Homepage;
