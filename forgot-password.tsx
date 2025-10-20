import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./forgot-password.module.css";

const ForgotPassword = () => {
  const router = useRouter();

  const onFrameClick = useCallback(() => {
    router.push("/forgot-password-end");
  }, [router]);

  return (
    <div className={styles.forgotPassword}>
      <div
        className={styles.vector}
        width={12}
        height={24}
        alt=""
        src="/vector2.svg"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.forgotPassword1}>Forgot Password</b>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} onClick={onFrameClick} />
        <div className={styles.component2} />
        <div className={styles.forgotPassword2} />
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

export default ForgotPassword;
