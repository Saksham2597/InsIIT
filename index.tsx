import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const SignUp = () => {
  const router = useRouter();

  const onFrameClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  const onVectorIconClick = useCallback(() => {
    router.push("/homepage");
  }, [router]);

  return (
    <div className={styles.signUp}>
      <div className={styles.signUpChild} />
      <div className={styles.logo}>
        <div className={styles.logoChild} />
        <div
          className={styles.image5}
          width={487}
          height={487}
          alt=""
          src="/image-51@2x.png"
        />
        <div className={styles.logoItem} />
        <b className={styles.insiit}>INSIIT</b>
      </div>
      <div className={styles.signUpParent}>
        <b className={styles.signUp1}>Sign up</b>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.frameDiv} onClick={onFrameClick} />
        <div className={styles.details} />
        <div className={styles.component2} />
        <div className={styles.component3} />
        <div className={styles.forgotPassword} />
        <div
          className={styles.vector}
          width={12}
          height={24}
          alt=""
          src="/vector2.svg"
          onClick={onVectorIconClick}
        />
      </div>
    </div>
  );
};

export default SignUp;
