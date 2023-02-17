import { StaticImageData } from "next/image";

export interface SlideCardProps {
  carouselData: {
    id: number;
    topDesc: string;
    title: string;
    middleDesc: string;
    lastDesc: string;
    iconImage?: StaticImageData;
    backgroundColor: string;
    buttonObj: {
      target: "_self" | "_blank";
      text: string;
      color: string;
      backgroundColor: string;
      url: string;
      onClick?: () => void;
    } | null;
  };
}
