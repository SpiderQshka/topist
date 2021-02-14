import React, { useCallback, useState } from "react";
import { IDataObject } from "interfaces";
import styles from "./styles.module.scss";
import HTMLFlipBook from "./FlipBook";
import {
  EmptyPage,
  Page,
  PageEndCover,
  PageSectionPreview,
  PageStartCover,
} from "./Page";
import { config } from "config";

interface AlbumProps {
  sections: IDataObject[];
}

export const Album: React.FunctionComponent<AlbumProps> = ({ sections }) => {
  const [albumContentHeight, setAlbumContentHeight] = useState<number>(0);
  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setAlbumContentHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div className={`${styles.container}`} ref={measuredRef}>
      <HTMLFlipBook
        drawShadow={true}
        flippingTime={1500}
        maxShadowOpacity={0.9}
        showCover={true}
        className={styles.album}
        width={550}
        height={config.albumHeight}
        size="stretch"
        minWidth={550}
        maxWidth={1000}
        minHeight={config.minAlbumHeight}
        maxHeight={config.maxAlbumHeight}
      >
        <PageStartCover />
        {sections.map((section) => {
          const mediaPages = section.media.map((media, j) => (
            <Page media={media} number={j} height={albumContentHeight} />
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
