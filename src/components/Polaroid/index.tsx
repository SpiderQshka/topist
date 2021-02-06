import React, { useEffect, useRef, useState } from "react";
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
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageWidth, setImageWidth] = useState<number>(0);

  useEffect(() => {
    if (imageRef.current) setImageWidth(imageRef.current.clientWidth);
  }, [imageRef.current?.clientWidth]);

  console.log(imageWidth);

  return (
    <div className={`${styles.container} ${styles[`container-${index % 3}`]}`}>
      <div className={styles.polaroid}>
        <img
          ref={imageRef}
          src={photo}
          alt={caption}
          className={styles.img}
          style={{ height: height || "auto", width: width || "auto" }}
        />
        {caption && imageWidth !== 0 && (
          <p className={styles.caption} style={{ width: imageWidth }}>
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};
