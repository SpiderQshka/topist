import autumn2019_1 from "static/images/autumn2019/1.jpg";
import autumn2019_2 from "static/images/autumn2019/2.jpg";
import autumn2019_3 from "static/images/autumn2019/3.jpg";
import autumn2019_4 from "static/images/autumn2019/4.jpg";

import winter20192020_1 from "static/images/winter20192020/1.jpg";
import winter20192020_2 from "static/images/winter20192020/2.jpg";
import winter20192020_3 from "static/images/winter20192020/3.jpg";
import winter20192020_4 from "static/images/winter20192020/4.jpg";

import spring2020_1 from "static/images/spring2020/1.jpg";
import spring2020_2 from "static/images/spring2020/2.jpg";
import spring2020_3 from "static/images/spring2020/3.jpg";
import spring2020_4 from "static/images/spring2020/4.jpg";
import spring2020_5 from "static/images/spring2020/5.jpg";
import spring2020_6 from "static/images/spring2020/6.jpg";

import summer2020_1 from "static/images/summer2020/1.jpg";
import summer2020_2 from "static/images/summer2020/2.jpg";
import summer2020_3 from "static/images/summer2020/3.jpg";
import summer2020_4 from "static/images/summer2020/4.jpg";
import summer2020_5 from "static/images/summer2020/5.jpg";
import summer2020_6 from "static/images/summer2020/6.jpg";

import autumn2020_1 from "static/images/autumn2020/1.jpg";
import autumn2020_2 from "static/images/autumn2020/2.jpg";
import autumn2020_3 from "static/images/autumn2020/3.jpg";

import winter20202021_1 from "static/images/winter20202021/1.jpg";
import winter20202021_2 from "static/images/winter20202021/2.jpg";
import winter20202021_3 from "static/images/winter20202021/3.jpg";
import winter20202021_4 from "static/images/winter20202021/4.jpg";
import winter20202021_5 from "static/images/winter20202021/5.jpg";

import video from "static/videos/video2.mp4";

export interface IPhoto {
  caption: string;
  isPhoto: boolean;
  src: string;
}

export interface IVideo {
  isVertical: boolean;
  isPhoto: boolean;
  src: string;
}

export type IMedia = IPhoto | IVideo;

export interface IDataObject {
  date: string;
  motto: string;
  description: string;
  media: IMedia[];
}

export const data: IDataObject[] = [
  {
    date: "Autumn 2019",
    motto: "From love to hate and back",
    description: "Long story...",
    media: [
      { src: autumn2019_1, caption: "My favorite photo", isPhoto: true },
      {
        src: autumn2019_2,
        caption: "Your hands + my bracelet = perfect match",
        isPhoto: true,
      },
      { src: autumn2019_3, caption: "We need to go there", isPhoto: true },
      { src: autumn2019_4, caption: "Shocked and beautiful", isPhoto: true },
    ],
  },
  {
    date: "Winter 2019 - 2020",
    motto: "Just like a Blizzard",
    description: "Long story...",
    media: [
      {
        src: winter20192020_1,
        caption: "Owl is a symbol of wisdom",
        isPhoto: true,
      },
      {
        src: winter20192020_2,
        caption: "My first work - right near you",
        isPhoto: true,
      },
      {
        src: winter20192020_3,
        caption: "But our hearts weren't Frozen",
        isPhoto: true,
      },
      { src: winter20192020_4, caption: "Your eyes are azure!", isPhoto: true },
    ],
  },
  {
    date: "Spring 2020",
    motto: "Bloom",
    description: "Long story...",
    media: [
      { src: spring2020_1, caption: "What a colors!", isPhoto: true },
      {
        src: spring2020_2,
        caption: "Trio",
        isPhoto: true,
      },
      {
        src: spring2020_3,
        caption: "First photo of mine I really liked",
        isPhoto: true,
      },
      { src: spring2020_4, caption: "Gerold's spying!", isPhoto: true },
      { src: spring2020_5, caption: "Goodbye school", isPhoto: true },
      { src: spring2020_6, caption: "Somewhere near MTZ", isPhoto: true },
    ],
  },
  {
    date: "Summer 2020",
    motto: "Heat between us",
    description: "Long story...",
    media: [
      {
        src: summer2020_1,
        caption: "Beautiful dusk, just like you",
        isPhoto: true,
      },
      {
        src: summer2020_2,
        caption: "Keep going, my faithful horse",
        isPhoto: true,
      },
      { src: summer2020_3, caption: "Looks cool!", isPhoto: true },
      { src: summer2020_4, caption: "Our best photo (for now)", isPhoto: true },
      { src: summer2020_5, caption: "Nice T-shirt!", isPhoto: true },
      { src: summer2020_6, caption: "Caution! Hot!", isPhoto: true },
    ],
  },
  {
    date: "Autumn 2020",
    motto: "Studing and fighting",
    description: "Long story...",
    media: [
      { src: autumn2020_1, caption: "Were we start..", isPhoto: true },
      {
        src: autumn2020_2,
        caption: "- I'm watching for you, code!",
        isPhoto: true,
      },
      {
        src: autumn2020_3,
        caption: "Through hard times together",
        isPhoto: true,
      },
    ],
  },
  {
    date: "Winter 2020-2021",
    motto: "Magic moments",
    description: "Long story...",
    media: [
      { src: winter20202021_1, caption: "Nice christmas tree!", isPhoto: true },
      {
        src: winter20202021_2,
        caption: "Like a pink snowfall",
        isPhoto: true,
      },
      { src: winter20202021_3, caption: "*t'mok*", isPhoto: true },
      {
        src: winter20202021_4,
        caption: "2, oh no, 3 nice guys",
        isPhoto: true,
      },
      { src: winter20202021_5, caption: "Smiling sun", isPhoto: true },
      {
        isVertical: true,
        src: video,
        isPhoto: false,
      },
    ],
  },
];
