import React, { useEffect, useState } from "react";
import { IDataObject } from "interfaces";
import { Album } from "components/Album";

import styles from "./styles.module.scss";
import { loadData } from "helpers";
import { Loader } from "components/Loader";

export const Main: React.FunctionComponent = () => {
  const [data, setData] = useState<IDataObject[]>([]);
  useEffect(() => {
    const processAsync = async () => {
      const data = await loadData();
      setData(data);
    };
    processAsync();
  }, []);
  return (
    <div className={styles.container}>
      {data.length > 0 ? <Album sections={data} /> : <Loader />}
    </div>
  );
};
