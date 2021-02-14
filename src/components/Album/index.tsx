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
        flippingTime={1000}
        maxShadowOpacity={0.7}
        showCover={true}
        className={styles.album}
        width={500}
        height={400}
        size="stretch"
        minWidth={450}
        maxHeight={500}
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
