import React, { useRef } from "react";
import styles from "./styles.module.scss";

interface VideoProps {
  src: string;
  isVertical: boolean;
}

export const Video: React.FunctionComponent<VideoProps> = ({
  src,
  isVertical,
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
    <div className={`${styles.container}`}>
      <video
        src={src}
        loop
        className={styles.video}
        ref={videoRef}
        onMouseEnter={() => videoHandler(true)}
        onMouseLeave={() => videoHandler(false)}
      ></video>
    </div>
  );
};
