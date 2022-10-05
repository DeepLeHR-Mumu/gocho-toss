import { StaticImageData } from "next/image";

export interface SlideCardProps {
  slideData: {
    id: number;
    topDesc: string;
    title: string;
    middleDesc: string;
    lastDesc: string;
    backgroundImage: StaticImageData;
    iconImage?: StaticImageData;
    backgroundColor: string;
    buttonObj: {
      target: string;
      text: string;
      color: string;
      backgroundColor: string;
      url: string;
    } | null;
  };
}
