import React, { useState } from "react";
import styles from "./styles.module.scss";
import startIcon from "static/icons/start.png";
import { scrollWindowHeight } from "helpers";

export const IntroSection: React.FunctionComponent = () => {
  const [isDone, setIsDone] = useState<boolean>(false);
  const clickHandler = () => setIsDone(true);
  return (
    <div
      className={`${styles.container} ${isDone && styles.done}`}
      onClick={clickHandler}
    >
      <div className={styles.content}>
        <h3 className={styles.subheader}>Our little</h3>
        <h1 className={styles.header}>Lo&shy;ve sto&shy;ry</h1>
        <div className={styles.actionsBlock}>
          <button
            className={`${styles.btn} ${styles.scrollDownBtn}`}
            onClick={scrollWindowHeight}
          >
            <img src={startIcon} className={styles.btnIcon} alt="Start!" />
          </button>
        </div>
      </div>
    </div>
  );
};
