import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./login.module.css";

const Login = () => {
  const router = useRouter();

  const onFrameClick = useCallback(() => {
    // Please sync "Homepage 2" to the project
  }, []);

  const onVectorIconClick = useCallback(() => {
    router.push("/homepage");
  }, [router]);

  return (
    <div className={styles.login}>
      <div className={styles.loginParent}>
        <b className={styles.login1}>Login</b>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} onClick={onFrameClick} />
        <div className={styles.details} />
        <div className={styles.component2} />
        <div className={styles.forgotPassword} />
        <div className={styles.forgotPassword1} />
        <div
          className={styles.vector}
          width={12}
          height={24}
          alt=""
          src="/vector2.svg"
          onClick={onVectorIconClick}
        />
      </div>
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
      <div className={styles.loginChild} />
    </div>
  );
};

export default Login;
