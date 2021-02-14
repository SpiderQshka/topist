import { IDataObject } from "interfaces";
import _ from "lodash";
import Aigle from "aigle";
import { AWS_API } from "./awsApi";

Aigle.mixin(_, {});

const getFileNameWithExtension: (path: string) => string = (path) =>
  path.slice(path.lastIndexOf("/") + 1);

export const loadData: () => Promise<IDataObject[]> = async () => {
  const api = new AWS_API();
  const directories = await api.getBucketDirectories();
  const data: IDataObject[] = [];
  await Aigle.forEachSeries(directories, async (directory) => {
    const config = await api.getDirectoryConfig(directory);
    if (config) {
      const mediaLinks = await api.getDirectoryMediaLinks(directory);
      config.media = config.media.map((mediaItem) => {
        const fileLink =
          mediaLinks.filter(
            (link) => mediaItem.src === getFileNameWithExtension(link)
          )[0] || "";
        return { ...mediaItem, src: fileLink };
      });
      data.push(config);
    }
  });
  return data;
};
