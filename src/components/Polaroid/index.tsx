import React from "react";
import styles from "./styles.module.scss";

interface PolaroidProps {
  index: number;
  photo: string;
  caption?: string;
  height?: number;
  width?: number;
}

export const Polaroid: React.FunctionComponent<PolaroidProps> = ({
  photo,
  caption,
  index,
  height,
  width,
}) => {
  const imagePadding = 60;
  return (
    <div className={`${styles.container} ${styles[`container-${index % 3}`]}`}>
      <div className={styles.polaroid}>
        {caption && <p className={styles.caption}>{caption}</p>}
        <img
          src={photo}
          alt={caption}
          className={styles.img}
          style={{
            maxHeight: height ? height - imagePadding : "auto",
            maxWidth: width ? width - imagePadding : "auto",
          }}
        />
      </div>
    </div>
  );
};
