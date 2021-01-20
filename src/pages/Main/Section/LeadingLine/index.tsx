import React from "react";
import styles from "./styles.module.scss";

interface LeadingLineProps {
  direction: "left" | "right";
}

export const LeadingLine: React.FunctionComponent<LeadingLineProps> = ({
  direction,
}) => {
  return direction === "right" ? (
    <>
      <div className={`${styles.line} ${styles.right} ${styles.line1}`}></div>
      <div className={`${styles.line} ${styles.right} ${styles.line2}`}></div>
      <div className={`${styles.line} ${styles.right} ${styles.line3}`}></div>
      <div className={`${styles.line} ${styles.right} ${styles.line4}`}></div>
      <div className={`${styles.line} ${styles.right} ${styles.line5}`}></div>
    </>
  ) : (
    <>
      <div className={`${styles.line} ${styles.left} ${styles.line1}`}></div>
      <div className={`${styles.line} ${styles.left} ${styles.line2}`}></div>
      <div className={`${styles.line} ${styles.left} ${styles.line3}`}></div>
      <div className={`${styles.line} ${styles.left} ${styles.line4}`}></div>
      <div className={`${styles.line} ${styles.left} ${styles.line5}`}></div>
    </>
  );
};
