import React from "react";
import styles from "./styles.module.scss";

interface PolaroidProps {
  index: number;
  photo: string;
  caption?: string;
  theme: "light" | "dark";
}

export const Polaroid: React.FunctionComponent<PolaroidProps> = ({
  photo,
  caption,
  index,
  theme,
}) => {
  return (
    <div
      className={`${styles.container} ${styles[`container-${index % 3}`]} ${
        theme === "dark" && styles.dark
      }`}
    >
      <div className={styles.polaroid}>
        <img src={photo} alt={caption} />
        {caption && <p className={styles.caption}>{caption}</p>}
      </div>
    </div>
  );
};
