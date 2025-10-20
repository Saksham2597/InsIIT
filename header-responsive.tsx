import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./header-responsive.module.css";

const HeaderResponsive = ({ className = "" }) => {
  const router = useRouter();

  const onMenuItemLogoContainerClick = useCallback(() => {
    router.push("/homepage");
  }, [router]);

  return (
    <div className={[styles.headerResponsive, className].join(" ")}>
      <div className={styles.navbar}>
        <div
          className={styles.menuItemlogo}
          onClick={onMenuItemLogoContainerClick}
        >
          <div className={styles.menuItemlogoChild} />
          <div
            className={styles.subtract}
            width={96}
            height={94}
            alt=""
            src="/subtract.svg"
          />
          <b className={styles.insiit}>INSIIT</b>
        </div>
        <div className={styles.menuItems}>
          <div className={styles.menuItem}>
            <div className={styles.menuItem1}>Ask a Question</div>
          </div>
          <div className={styles.menuItem2}>
            <div className={styles.menuItem1}>Insights</div>
          </div>
          <div className={styles.menuItem2}>
            <div className={styles.menuItem1}>JoSAA</div>
          </div>
          <div className={styles.menuItem2}>
            <div className={styles.menuItem1}>Forum</div>
          </div>
          <div className={styles.menuItem8}>
            <div className={styles.menuItem1}>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderResponsive.propTypes = {
  className: PropTypes.string,
};

export default HeaderResponsive;
