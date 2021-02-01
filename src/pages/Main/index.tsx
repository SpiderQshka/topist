import React from "react";
import { IntroSection } from "./IntroSection";
import { Section } from "./Section";
import { EndingSection } from "./EndingSection";
import { data } from "static/data";
import { Album } from "components/Album";

import styles from "./styles.module.scss";

export const Main: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Album sections={data} />
      {/* <IntroSection />
      {data.map((el, i) => (
        <Section theme={i % 2 === 0 ? "light" : "dark"} data={el} />
      ))}
      <EndingSection /> */}
    </div>
  );
};
