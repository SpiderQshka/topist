import React, { useRef } from "react";
import styles from "./styles.module.scss";

interface VideoProps {
  src: string;
  caption?: string;
  isVertical?: boolean;
  height?: number;
  width?: number;
}

export const Video: React.FunctionComponent<VideoProps> = ({
  src,
  height,
  width,
  caption,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoHandler = (isHovered: boolean) => {
    if (videoRef.current) {
      const video: HTMLVideoElement = videoRef.current;
      if (isHovered) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <div className={styles.container}>
      {caption && <p className={styles.caption}>{caption}</p>}
      <video
        src={src}
        loop
        className={styles.video}
        ref={videoRef}
        style={{ height: height || "auto", width: width || "auto" }}
        onMouseEnter={() => videoHandler(true)}
        onMouseLeave={() => videoHandler(false)}
      ></video>
    </div>
  );
};
