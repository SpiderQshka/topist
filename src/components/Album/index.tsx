import React from "react";
import { IDataObject } from "static/data";
import styles from "./styles.module.scss";
import HTMLFlipBook from "react-pageflip";
import "./flipbook.scss";
import {
  EmptyPage,
  Page,
  PageEndCover,
  PageSectionPreview,
  PageStartCover,
} from "./Page";
interface AlbumProps {
  sections: IDataObject[];
}

export const Album: React.FunctionComponent<AlbumProps> = ({ sections }) => {
  return (
    <div className={`${styles.container}`}>
      <HTMLFlipBook
        drawShadow={true}
        flippingTime={1500}
        maxShadowOpacity={0.9}
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
        <PageStartCover />
        {sections.map((section) => {
          const mediaPages = section.media.map((media, j) => (
            <Page media={media} number={j} />
          ));
          if (mediaPages.length % 2 === 1) mediaPages.push(<EmptyPage />);
          return [
            <PageSectionPreview
              date={section.date}
              motto={section.motto}
              description={section.description}
            />,
            ...mediaPages,
          ];
        })}
        <PageEndCover />
      </HTMLFlipBook>
    </div>
  );
};
