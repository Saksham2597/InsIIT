import Image from "next/image";
import styles from "./forgot-password-end.module.css";

const ForgotPasswordEnd = () => {
  return (
    <div className={styles.forgotPasswordEnd}>
      <div
        className={styles.vector}
        width={12}
        height={24}
        alt=""
        src="/vector2.svg"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.aPasswordRest}>
          A password rest link has been shared to your registered e-mail ID.
        </b>
      </div>
      <div className={styles.logo}>
        <div className={styles.logoChild} />
        <div
          className={styles.image5}
          width={297}
          height={297}
          alt=""
          src="/image-5@2x.png"
        />
        <div className={styles.logoItem} />
        <b className={styles.insiit}>INSIIT</b>
      </div>
    </div>
  );
};

export default ForgotPasswordEnd;
