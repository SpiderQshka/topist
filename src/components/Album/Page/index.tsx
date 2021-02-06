import { Polaroid } from "components/Polaroid";
import { Video } from "components/Video";
import React from "react";
import { IMedia, IPhoto, IVideo } from "static/data";
import styles from "./styles.module.scss";

interface PageProps {
  media: IMedia;
  number: number;
}

interface PageSectionPreviewProps {
  date: string;
  motto: string;
}

export const EmptyPage = React.forwardRef<HTMLDivElement>(({}, ref) => {
  return <div className={`${styles.page}`} ref={ref} data-density="hard"></div>;
});

export const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ number, media }, ref) => {
    const mediaHeight = 500;
    return (
      <div
        className={`${styles.page} ${number % 2 !== 0 && styles.odd}`}
        ref={ref}
        data-density="hard"
      >
        <div className={`${styles.content}`}>
          {media.isPhoto ? (
            <Polaroid
              caption={(media as IPhoto).caption}
              photo={media.src}
              index={number}
              height={mediaHeight}
            />
          ) : (
            <Video
              src={media.src}
              isVertical={(media as IVideo).isVertical}
              height={mediaHeight}
            />
          )}
        </div>
      </div>
    );
  }
);

export const PageSectionPreview = React.forwardRef<
  HTMLDivElement,
  PageSectionPreviewProps
>(({ date, motto }, ref) => {
  return (
    <>
      <div className={`${styles.page} ${styles.sectionPreview}`} ref={ref}>
        <div className={`${styles.content}`}>
          <h1 className={styles.date}>{date}</h1>
          <h2 className={styles.motto}>{motto}</h2>
        </div>
      </div>
      <div
        className={`${styles.page} ${styles.sectionPreview}`}
        ref={ref}
      ></div>
    </>
  );
});

export const PageStartCover = React.forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <>
      <div className={`${styles.page} ${styles.cover}`} ref={ref}>
        <div className={`${styles.content}`}>
          <h2 className={styles.header}>Open me</h2>
        </div>
      </div>

      <div className={`${styles.page} ${styles.cover}`} ref={ref}>
        <div className={`${styles.content}`}>
          <p className={styles.previewText}>
            This book is going to tell you a little and beautiful story about...
            Well, you'll know soon. <br /> P.S. Click the page to flip it
          </p>
        </div>
      </div>
    </>
  );
});

export const PageEndCover = React.forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <>
      <div className={`${styles.page} ${styles.cover}`} ref={ref}>
        <div className={`${styles.content}`}>
          <p className={styles.previewText}>Hope you liked it, sunny ;)</p>
        </div>
      </div>
      <div className={`${styles.page} ${styles.cover}`} ref={ref}>
        <div className={`${styles.content}`}>
          <h2 className={styles.header}>THE END</h2>
        </div>
      </div>
    </>
  );
});
