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
  description?: string;
}

export const EmptyPage = React.forwardRef<HTMLDivElement>(({}, ref) => {
  return <div className={styles.page} ref={ref} data-density="hard"></div>;
});

export const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ number, media }, ref) => {
    const photoHeight = 500;
    const videoHeight = 450;
    return (
      <div className={styles.page} ref={ref} data-density="hard">
        <div className={`${styles.content}`}>
          {media.isPhoto ? (
            <Polaroid
              caption={(media as IPhoto).caption}
              photo={media.src}
              index={number}
              height={photoHeight}
            />
          ) : (
            <Video
              src={media.src}
              isVertical={(media as IVideo).isVertical}
              caption={(media as IVideo).caption}
              height={videoHeight}
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
>(({ date, motto, description }, ref) => {
  return (
    <>
      <div className={`${styles.page} ${styles.sectionPreview}`} ref={ref}>
        <div className={styles.content}>
          <h1 className={styles.date}>{date}</h1>
          <h2 className={styles.motto}>{motto}</h2>
        </div>
      </div>
      <div
        className={`${styles.page} ${styles.sectionPreview} ${styles.secondPage}`}
        ref={ref}
      >
        <div className={styles.content}>
          {description && <p className={styles.previewText}>{description}</p>}
        </div>
      </div>
    </>
  );
});

export const PageStartCover = React.forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <>
      <div className={`${styles.page} ${styles.cover}`} ref={ref}>
        <div className={styles.content}>
          <h2 className={styles.header}>❤</h2>
        </div>
      </div>

      <div className={`${styles.page} ${styles.cover}`} ref={ref}>
        <div className={styles.content}>
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
      <div className={`${styles.page} ${styles.cover} ${styles.end}`} ref={ref}>
        <div className={styles.content}>
          <p className={styles.previewText}>Hope you liked it, sunny ;)</p>
        </div>
      </div>
      <div className={`${styles.page} ${styles.cover} ${styles.end}`} ref={ref}>
        <div className={styles.content}>
          <h2 className={styles.header}>the end</h2>
        </div>
      </div>
    </>
  );
});
