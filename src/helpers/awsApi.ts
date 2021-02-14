import AWS from "aws-sdk";
import { ListObjectsRequest } from "aws-sdk/clients/s3";
import axios from "axios";
import { IDataObject } from "interfaces";

const getFileExt: (fileName: string) => string = (fileName: string) =>
  fileName.slice(fileName.lastIndexOf(".") + 1);

export class AWS_API {
  private s3Instance: AWS.S3;
  private bucketName: string;
  constructor() {
    this.bucketName = process.env.REACT_APP_AWS_BUCKET_NAME || "bucket";

    AWS.config.region = process.env.REACT_APP_AWS_REGION || "eu-central-1"; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: process.env.REACT_APP_AWS_IDENTITY_POOL_ID || "",
    });

    this.s3Instance = new AWS.S3({
      apiVersion: process.env.REACT_APP_AWS_API_VERSION,
      params: { Bucket: this.bucketName },
    });
  }
  getBucketDirectories = (): Promise<string[]> =>
    new Promise((resolve) => {
      this.s3Instance.listObjects(
        { Delimiter: "/" } as ListObjectsRequest,
        (err, data) => {
          if (err) {
            console.error(err);
            resolve([]);
          } else {
            const albumsNames = data.CommonPrefixes?.map((commonPrefix) => {
              const prefix = commonPrefix.Prefix as string;
              const albumName = decodeURIComponent(prefix.replace("/", ""));
              return albumName;
            }) as string[];
            resolve(albumsNames.sort((a, b) => (a < b ? -1 : 1)));
          }
        }
      );
    });
  getDirectoryConfig = (directoryName: string): Promise<IDataObject | null> =>
    new Promise((resolve) => {
      this.s3Instance.listObjects(
        {
          Prefix: directoryName + "/",
        } as ListObjectsRequest,
        (err, data) => {
          if (err) {
            resolve(null);
          } else {
            const href = this.s3Instance.endpoint.href;
            const bucketUrl = href + this.bucketName + "/";

            const configFileLink = (data.Contents?.map((file) => {
              if (file.Size || 0 > 0) {
                const fileKey = file.Key as string;
                const fileUrl = bucketUrl + fileKey;
                return fileUrl;
              }
              return null;
            }) as string[])
              .filter((file) => !!file)
              .filter((fileLink) => getFileExt(fileLink) === "json")[0];

            axios.get(configFileLink).then((response) => {
              resolve(response.data);
            });
          }
        }
      );
    });
  getDirectoryMediaLinks = (directoryName: string): Promise<string[]> =>
    new Promise((resolve) => {
      this.s3Instance.listObjects(
        {
          Prefix: directoryName + "/",
        } as ListObjectsRequest,
        (err, data) => {
          if (err) {
            resolve([]);
          } else {
            const href = this.s3Instance.endpoint.href;
            const bucketUrl = href + this.bucketName + "/";

            const filesLinks = (data.Contents?.map((file) => {
              if (file.Size || 0 > 0) {
                const fileKey = file.Key as string;
                const fileUrl = bucketUrl + fileKey;
                return fileUrl;
              }
            }) as string[])
              .filter((file) => !!file)
              .filter((fileLink) => getFileExt(fileLink) !== "json");

            resolve(filesLinks);
          }
        }
      );
    });
}
