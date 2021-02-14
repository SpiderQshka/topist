export interface IPhoto {
  caption: string;
  isPhoto: boolean;
  src: string;
}

export interface IVideo {
  isVertical: boolean;
  isPhoto: boolean;
  src: string;
  caption: string;
}

export type IMedia = IPhoto | IVideo;

export interface IDataObject {
  date: string;
  motto: string;
  description: string;
  media: IMedia[];
}
