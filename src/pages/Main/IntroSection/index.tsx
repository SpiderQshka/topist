import React from "react";
import styles from "./styles.module.scss";
import startIcon from "static/icons/start.png";
import { scrollWindowHeight } from "helpers";

export const IntroSection: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.subheader}>Our little</h3>
        <h1 className={styles.header}>Love story</h1>
        <div className={styles.actionsBlock}>
          <button
            className={`${styles.btn} ${styles.scrollDownBtn}`}
            onClick={() => scrollWindowHeight()}
          >
            <img src={startIcon} className={styles.btnIcon} alt="Start!" />
          </button>
        </div>
      </div>
    </div>
  );
};
