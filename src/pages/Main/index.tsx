import React from "react";
import { data } from "static/data";
import { Album } from "components/Album";

import styles from "./styles.module.scss";

export const Main: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Album sections={data} />
    </div>
  );
};
