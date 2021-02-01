import React from "react";

import styles from "./styles.module.scss";

interface NailedPaperProps {
  text: string;
}

export const NailedPaper: React.FunctionComponent<NailedPaperProps> = ({
  text,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
