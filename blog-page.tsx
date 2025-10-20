import Image from "next/image";
import styles from "./blog-page.module.css";

const BlogPage = () => {
  return (
    <div className={styles.blogPage}>
      <div className={styles.articleDetail}>
        <div className={styles.pageContents}>
          <div className={styles.articleSection}>
            <div className={styles.blog}>
              <div className={styles.go}>
                <div
                  className={styles.goChild}
                  width={19}
                  height={11}
                  alt=""
                  src="/arrow-1.svg"
                />
                <div className={styles.button}>
                  <b className={styles.readNow}>All Articles</b>
                  <div
                    className={styles.buttonChild}
                    width={77}
                    height={1}
                    alt=""
                    src="/line-111.svg"
                  />
                </div>
              </div>
              <div className={styles.blogDetails}>
                <div className={styles.catAndDate}>
                  <div className={styles.tag}>
                    <div className={styles.category1}>Category 1</div>
                  </div>
                  <b className={styles.september2001}>11 September, 2001</b>
                </div>
                <b className={styles.thisIsThe}>
                  This is the article name - headline
                </b>
                <div className={styles.author}>
                  <div className={styles.authorChild} />
                  <div className={styles.nameAndPosition}>
                    <b className={styles.firstLast}>First Last</b>
                    <div
                      className={styles.sophomoreAtIitx}
                    >{`Sophomore at IITX `}</div>
                  </div>
                </div>
              </div>
              <div className={styles.blogContent}>
                <div
                  className={styles.image11}
                  width={572}
                  height={296}
                  alt=""
                  src="/image-11@2x.png"
                />
                <div className={styles.suspendissePotentiSed}>
                  Suspendisse potenti. Sed eu consequat augue. Aenean id diam
                  sit amet velit tempus pretium. Donec in mauris et libero
                  pretium tincidunt. Praesent erat tellus, rhoncus ut euismod
                  vitae, blandit et lorem. Nullam tellus justo, feugiat et
                  laoreet malesuada, malesuada ac urna. Praesent lectus lorem,
                  sagittis eget mi at, placerat euismod urna. Sed at magna arcu.
                  Maecenas et efficitur lectus, nec congue nisi. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className={styles.loremIpsumDolorContainer}>
                  <p className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent vel nisi eu lectus scelerisque accumsan. Curabitur
                    ultricies lorem eget nulla suscipit pellentesque. Fusce
                    sodales nulla urna, vel commodo nisl rutrum et. Praesent
                    egestas semper magna, eu posuere eros posuere quis. Sed in
                    arcu ut turpis commodo tempor ac at libero. Sed pulvinar,
                    enim vel fermentum eleifend, metus nisl interdum sapien, non
                    ultrices ipsum massa et mi. Donec congue odio et lacus
                    pellentesque molestie.
                  </p>
                  <p className={styles.loremIpsumDolor}>
                    Suspendisse potenti. Sed eu consequat augue. Aenean id diam
                    sit amet velit tempus pretium. Donec in mauris et libero
                    pretium tincidunt. Praesent erat tellus, rhoncus ut euismod
                    vitae, blandit et lorem. Nullam tellus justo, feugiat et
                    laoreet malesuada, malesuada ac urna. Praesent lectus lorem,
                    sagittis eget mi at, placerat euismod urna. Sed at magna
                    arcu. Maecenas et efficitur lectus, nec congue nisi. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p className={styles.loremIpsumDolor}>
                    Aliquam congue bibendum nisl vel pretium. Ut at commodo
                    nulla. Quisque consequat volutpat risus, id tempor erat
                    tincidunt eu. Ut consectetur varius consequat. Integer
                    blandit ante nec urna congue varius. Ut porta venenatis
                    risus non aliquam. Praesent euismod at sem cursus ultrices.
                    In fringilla at sapien et facilisis. Fusce nec finibus enim,
                    a iaculis erat.
                  </p>
                  <p className={styles.loremIpsumDolor}>
                    Nulla non ante quis leo scelerisque porta ac sed nisi.
                    Quisque vitae sem id ligula efficitur rhoncus nec id nibh.
                    Aenean enim velit, interdum et cursus ut, semper pharetra
                    urna. Quisque nisi arcu, cursus et arcu dictum, maximus
                    consequat ipsum. Aenean ut erat vitae ligula sollicitudin
                    vehicula a in metus. Suspendisse sed molestie urna. Aenean
                    aliquam, ex eget ullamcorper dignissim, enim massa luctus
                    eros, feugiat rhoncus risus libero quis dui. Praesent
                    efficitur laoreet leo sit amet pulvinar. Fusce pulvinar
                    tristique vulputate.
                  </p>
                  <p className={styles.loremIpsumDolor}>
                    Phasellus consequat consectetur mollis. Sed imperdiet
                    pretium luctus. Maecenas euismod pellentesque ex, id dapibus
                    dui interdum eget. Integer vel odio velit. Curabitur commodo
                    augue et orci vehicula laoreet. In sapien elit, suscipit ut
                    enim non, tincidunt cursus tortor. Morbi at orci magna. Nam
                    sollicitudin dui vitae orci tempor, ullamcorper porttitor ex
                    ultrices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.articleContainer}>
            <b className={styles.realatedBlogs}>Realated Blogs</b>
            <div className={styles.blogArticles}>
              <div className={styles.blogPreview}>
                <div className={styles.blogPreviewChild} />
                <div className={styles.tagParent}>
                  <div className={styles.tag1}>
                    <div className={styles.category1}>Category 1</div>
                  </div>
                  <b className={styles.articleName}>
                    Article name - headline for an article
                  </b>
                  <div className={styles.button1}>
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
                    className={styles.frameChild}
                    width={19}
                    height
                    alt=""
                    src
                  />
                </div>
              </div>
              <div className={styles.blogPreview1}>
                <div className={styles.blogPreviewChild} />
                <div className={styles.tagParent}>
                  <div className={styles.tag2}>
                    <div className={styles.category1}>Category 2</div>
                  </div>
                  <b className={styles.articleName}>
                    Article name - headline for an article
                  </b>
                  <div className={styles.button1}>
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
                    className={styles.frameChild}
                    width={19}
                    height
                    alt=""
                    src
                  />
                </div>
              </div>
              <div className={styles.blogPreview1}>
                <div className={styles.blogPreviewChild} />
                <div className={styles.tagParent}>
                  <div className={styles.tag2}>
                    <div className={styles.category1}>Category 2</div>
                  </div>
                  <b className={styles.articleName}>
                    Article name - headline for an article
                  </b>
                  <div className={styles.button1}>
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
                    className={styles.frameChild}
                    width={19}
                    height
                    alt=""
                    src
                  />
                </div>
              </div>
              <div className={styles.blogPreview}>
                <div className={styles.blogPreviewChild} />
                <div className={styles.tagParent}>
                  <div className={styles.tag1}>
                    <div className={styles.category1}>Category 1</div>
                  </div>
                  <b className={styles.articleName}>
                    Article name - headline for an article
                  </b>
                  <div className={styles.button1}>
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
                    className={styles.frameChild}
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
                    <p className={styles.loremIpsumDolor}>
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
                  <div className={styles.firstLast}>About Us</div>
                  <div className={styles.firstLast}>Contact Us</div>
                  <div className={styles.firstLast}>Devs</div>
                </div>
                <div className={styles.column1}>
                  <div className={styles.firstLast}>About IITH</div>
                  <div className={styles.firstLast}>Link 2</div>
                  <div className={styles.firstLast}>Link 3</div>
                </div>
                <div className={styles.column1}>
                  <div className={styles.firstLast}>Link 1</div>
                  <div className={styles.firstLast}>Link 2</div>
                  <div className={styles.firstLast}>Link 3</div>
                </div>
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

export default BlogPage;
