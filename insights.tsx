import Image from "next/image";
import styles from "./insights.module.css";

const Insights = () => {
  return (
    <div className={styles.insights}>
      <div className={styles.insigthsPageContent}>
        <div className={styles.blogParent}>
          <div className={styles.blog}>Blog</div>
          <div className={styles.frameParent}>
            <div className={styles.thisIsAFeaturedArticleTParent}>
              <b className={styles.thisIsA}>
                This is a featured article - the most important piece of content
              </b>
              <div className={styles.veryShortDescription}>
                Very short description of what’s actually being discussed in
                this article, maybe the first sentences to provide a prieview
              </div>
              <div className={styles.frameChild} />
            </div>
            <div
              className={styles.image10}
              width={648}
              height={348}
              alt=""
              src="/image-10@2x.png"
            />
          </div>
        </div>
        <div className={styles.blogListing}>
          <div className={styles.categoryTabs}>
            <div className={styles.blogCat}>
              <div className={styles.placeholder}>All Articles</div>
            </div>
            <div className={styles.blogCat1}>
              <div className={styles.placeholder}>Category 1</div>
            </div>
            <div className={styles.blogCat1}>
              <div className={styles.placeholder}>Category 2</div>
            </div>
            <div className={styles.blogCat1}>
              <div className={styles.placeholder}>Category 3</div>
            </div>
          </div>
          <div className={styles.articles}>
            <div className={styles.blogPreview}>
              <div
                className={styles.blogPreviewChild}
                width={270}
                height={140}
                alt=""
                src="/rectangle-36@2x.png"
              />
              <div className={styles.tagParent}>
                <div className={styles.tag}>
                  <div className={styles.category1}>Category 1</div>
                </div>
                <b className={styles.articleName}>
                  Article name - headline for an article
                </b>
                <div className={styles.button}>
                  <b className={styles.readNow}>Read Now</b>
                  <div
                    className={styles.buttonChild}
                    width={77}
                    height={1}
                    alt=""
                    src="/line-11.svg"
                  />
                </div>
                <div
                  className={styles.frameItem}
                  width={19}
                  height
                  alt=""
                  src
                />
              </div>
            </div>
            <div className={styles.blogPreview1}>
              <div className={styles.blogPreviewItem} />
              <div className={styles.tagParent}>
                <div className={styles.tag1}>
                  <div className={styles.category1}>Category 3</div>
                </div>
                <b className={styles.articleName}>
                  Article name - headline for an article
                </b>
                <div className={styles.button}>
                  <b className={styles.readNow}>Read Now</b>
                  <div
                    className={styles.buttonChild}
                    width={77}
                    height={1}
                    alt=""
                    src="/line-11.svg"
                  />
                </div>
                <div
                  className={styles.frameItem}
                  width={19}
                  height
                  alt=""
                  src
                />
              </div>
            </div>
            <div className={styles.blogPreview2}>
              <div className={styles.blogPreviewItem} />
              <div className={styles.tagParent}>
                <div className={styles.tag2}>
                  <div className={styles.category1}>Category 2</div>
                </div>
                <b className={styles.articleName}>
                  Article name - headline for an article
                </b>
                <div className={styles.button}>
                  <b className={styles.readNow}>Read Now</b>
                  <div
                    className={styles.buttonChild}
                    width={77}
                    height={1}
                    alt=""
                    src="/line-11.svg"
                  />
                </div>
                <div
                  className={styles.frameItem}
                  width={19}
                  height
                  alt=""
                  src
                />
              </div>
            </div>
            <div className={styles.blogPreview3}>
              <div className={styles.blogPreviewItem} />
              <div className={styles.tagParent}>
                <div className={styles.tag2}>
                  <div className={styles.category1}>Category 2</div>
                </div>
                <b className={styles.articleName}>
                  Article name - headline for an article
                </b>
                <div className={styles.button}>
                  <b className={styles.readNow}>Read Now</b>
                  <div
                    className={styles.buttonChild}
                    width={77}
                    height={1}
                    alt=""
                    src="/line-11.svg"
                  />
                </div>
                <div
                  className={styles.frameItem}
                  width={19}
                  height
                  alt=""
                  src
                />
              </div>
            </div>
            <div className={styles.blogPreview4}>
              <div className={styles.blogPreviewItem} />
              <div className={styles.tagParent}>
                <div className={styles.tag}>
                  <div className={styles.category1}>Category 1</div>
                </div>
                <b className={styles.articleName}>
                  Article name - headline for an article
                </b>
                <div className={styles.button}>
                  <b className={styles.readNow}>Read Now</b>
                  <div
                    className={styles.buttonChild}
                    width={77}
                    height={1}
                    alt=""
                    src="/line-11.svg"
                  />
                </div>
                <div
                  className={styles.frameItem}
                  width={19}
                  height
                  alt=""
                  src
                />
              </div>
            </div>
            <div className={styles.blogPreview5}>
              <div className={styles.blogPreviewItem} />
              <div className={styles.tagParent}>
                <div className={styles.tag2}>
                  <div className={styles.category1}>Category 2</div>
                </div>
                <b className={styles.articleName}>
                  Article name - headline for an article
                </b>
                <div className={styles.button}>
                  <b className={styles.readNow}>Read Now</b>
                  <div
                    className={styles.buttonChild}
                    width={77}
                    height={1}
                    alt=""
                    src="/line-11.svg"
                  />
                </div>
                <div
                  className={styles.frameItem}
                  width={19}
                  height
                  alt=""
                  src
                />
              </div>
            </div>
            <div className={styles.blogPreview6}>
              <div className={styles.blogPreviewItem} />
              <div className={styles.tagParent}>
                <div className={styles.tag1}>
                  <div className={styles.category1}>Category 3</div>
                </div>
                <b className={styles.articleName}>
                  Article name - headline for an article
                </b>
                <div className={styles.button}>
                  <b className={styles.readNow}>Read Now</b>
                  <div
                    className={styles.buttonChild}
                    width={77}
                    height={1}
                    alt=""
                    src="/line-11.svg"
                  />
                </div>
                <div
                  className={styles.frameItem}
                  width={19}
                  height
                  alt=""
                  src
                />
              </div>
            </div>
            <div className={styles.blogPreview7}>
              <div className={styles.blogPreviewItem} />
              <div className={styles.tagParent}>
                <div className={styles.tag}>
                  <div className={styles.category1}>Category 1</div>
                </div>
                <b className={styles.articleName}>
                  Article name - headline for an article
                </b>
                <div className={styles.button}>
                  <b className={styles.readNow}>Read Now</b>
                  <div
                    className={styles.buttonChild}
                    width={77}
                    height={1}
                    alt=""
                    src="/line-11.svg"
                  />
                </div>
                <div
                  className={styles.frameItem}
                  width={19}
                  height
                  alt=""
                  src
                />
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

export default Insights;
