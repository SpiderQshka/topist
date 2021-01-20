import { Polaroid } from "components/Polaroid";
import React from "react";
import styles from "./styles.module.scss";
import { LeadingLine } from "./LeadingLine";
import { IDataObject } from "static/data";

interface SectionProps {
  theme: "dark" | "light";
  data: IDataObject;
}

export const Section: React.FunctionComponent<SectionProps> = ({
  theme,
  data: { date, description, header, motto, photos },
}) => {
  return (
    <div className={`${styles.container} ${theme === "dark" && styles.dark}`}>
      <div className={styles.content}>
        <div className={styles.photosBlock}>
          {photos.map((photo, i) => (
            <Polaroid
              index={i}
              caption={photo.caption}
              photo={photo.src}
              theme={theme}
            />
          ))}
        </div>
        <div className={styles.descriptionBlock}>
          <div className={styles.headerBlock}>
            <div className={styles.dateBlock}>
              <span className={styles.line}></span>
              <span className={styles.text}>{date}</span>
              <span className={styles.line}></span>
            </div>
            <h2 className={styles.header}>{header}</h2>
            <p className={styles.mottoBlock}>
              <span className={styles.line}></span>
              <span className={styles.text}>{motto}</span>
              <span className={styles.line}></span>
            </p>
          </div>
          <p className={styles.descriptionText}>{description}</p>
        </div>
      </div>
      <LeadingLine direction={theme === "dark" ? "left" : "right"} />
    </div>
  );
};