import React from "react";
import styles from "./styles.module.scss";

export const EndingSection: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.subheader}>And this is NOT the end at all</h3>
        <h1 className={styles.header}>to be con&shy;ti&shy;nu&shy;ed..</h1>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};
