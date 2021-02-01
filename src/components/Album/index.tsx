import React, { useState } from "react";
import { IDataObject } from "static/data";
import styles from "./styles.module.scss";
import HTMLFlipBook from "react-pageflip";
import { NailedPaper } from "components/Album/NailedPaper";
import { Polaroid } from "components/Polaroid";

interface AlbumProps {
  sections: IDataObject[];
}

interface PageProps {
  page: IDataObject;
  number: number;
}

interface PageSectionPreviewProps {
  date: string;
  header: string;
  motto: string;
}

const PageSectionPreview = React.forwardRef<
  HTMLDivElement,
  PageSectionPreviewProps
>((props, ref) => {
  return (
    <div className={`${styles.page} ${styles.pageCover}`} ref={ref}>
      <div className={`${styles.pageContent}`}>
        <h2>BOOK TITLE</h2>
      </div>
    </div>
  );
});

const PageCover = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      className={`${styles.page} ${styles.pageCover}`}
      ref={ref}
      // data-density="hard"
    >
      <div className={`${styles.pageContent}`}>
        <h2>BOOK TITLE</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef<HTMLDivElement, PageProps>(
  (
    { number, page: { date, description, header, motto, photos, video } },
    ref
  ) => {
    return (
      <div
        className={`${styles.page} ${number % 2 !== 0 && styles.odd}`}
        ref={ref}
      >
        <div className={`${styles.pageContent}`}>
          {photos.map((photo, i) => (
            <Polaroid index={i} caption={photo.caption} photo={photo.src} />
          ))}
        </div>
      </div>
    );
  }
);

export const Album: React.FunctionComponent<AlbumProps> = ({ sections }) => {
  return (
    <div className={`${styles.container}`}>
      {/* <NailedPaper text="Hey!" /> */}
      <HTMLFlipBook
        drawShadow={true}
        flippingTime={1500}
        maxShadowOpacity={0.5}
        showCover={true}
        className={styles.album}
        width={550}
        height={433}
        size="stretch"
        minWidth={550}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
      >
        <PageCover />
        {sections.map((section, i) => (
          <Page page={section} number={i}></Page>
        ))}
        {/* <Page number={1}></Page>
        <Page number={2}></Page>
        <Page number={3}></Page>
        <Page number={4}></Page> */}
        <PageCover />
      </HTMLFlipBook>
    </div>
  );
};
