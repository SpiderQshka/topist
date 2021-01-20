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

interface IPhoto {
  caption: string;
  src: string;
}

export interface IDataObject {
  date: string;
  header: string;
  motto: string;
  description: string;
  photos: IPhoto[];
}

export const data: IDataObject[] = [
  {
    date: "Autumn 2019",
    header: "Origin",
    motto: "From love to hate and back",
    description: "Long story...",
    photos: [
      { src: autumn2019_1, caption: "My favorite photo" },
      {
        src: autumn2019_2,
        caption: "Your hands + my bracelet = perfect match",
      },
      { src: autumn2019_3, caption: "We need to go there" },
      { src: autumn2019_4, caption: "Shocked and beautiful" },
    ],
  },
  {
    date: "Winter 2019 - 2020",
    header: "Hot-cold-hot",
    motto: "Just like a Blizzard",
    description: "Long story...",
    photos: [
      { src: winter20192020_1, caption: "Owl is a symbol of wisdom" },
      {
        src: winter20192020_2,
        caption: "My first work - right near you",
      },
      { src: winter20192020_3, caption: "But our hearts weren't Frozen" },
      { src: winter20192020_4, caption: "Your eyes are azure!" },
    ],
  },
  {
    date: "Spring 2020",
    header: "Bloom",
    motto: "Oh God, we can undarstand each other!",
    description: "Long story...",
    photos: [
      { src: spring2020_1, caption: "What a colors!" },
      {
        src: spring2020_2,
        caption: "Trio",
      },
      { src: spring2020_3, caption: "First photo of mine I really liked" },
      { src: spring2020_4, caption: "Gerold's spying!" },
      { src: spring2020_5, caption: "Goodbye school" },
      { src: spring2020_6, caption: "Somewhere near MTZ" },
    ],
  },
  {
    date: "Summer 2020",
    header: "Heat between us",
    motto: "Incredible!",
    description: "Long story...",
    photos: [
      { src: summer2020_1, caption: "Beautiful dusk, just like you" },
      {
        src: summer2020_2,
        caption: "Keep going, my faithful horse",
      },
      { src: summer2020_3, caption: "Looks cool!" },
      { src: summer2020_4, caption: "Our best photo (for now)" },
      { src: summer2020_5, caption: "Nice T-shirt!" },
      { src: summer2020_6, caption: "Caution! Hot!" },
    ],
  },
  {
    date: "Autumn 2020",
    header: "Studing and fighting",
    motto: "Brave and smart",
    description: "Long story...",
    photos: [
      { src: autumn2020_1, caption: "Were we start.." },
      {
        src: autumn2020_2,
        caption: "- I'm watching for you, code!",
      },
      { src: autumn2020_3, caption: "Through hard times together" },
    ],
  },
  {
    date: "Winter 2020-2021",
    header: "Magic moments",
    motto: "Lots to remember",
    description: "Long story...",
    photos: [
      { src: winter20202021_1, caption: "Nice christmas tree!" },
      {
        src: winter20202021_2,
        caption: "Like a pink snowfall",
      },
      { src: winter20202021_3, caption: "*t'mok*" },
      { src: winter20202021_4, caption: "2, oh no, 3 nice guys" },
      { src: winter20202021_5, caption: "Smiling sun" },
    ],
  },
];
