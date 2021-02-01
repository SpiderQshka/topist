import React, { useState } from "react";
import { IDataObject } from "static/data";
import styles from "./styles.module.scss";

interface AlbumProps {
  pages: IDataObject[];
}

export const Album: React.FunctionComponent = () => {
  const [count, setCount] = useState<number>(0);
  const clickHandler = () => setCount(count + 1);
  return (
    <ul className={styles.container} onClick={clickHandler}>
      <li className={styles.page}></li>
      <li className={styles.page}></li>
    </ul>
  );
};
