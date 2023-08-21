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
    topButtonObj: {
      target: "_self" | "_blank";
      text: string;
      color: string;
      backgroundColor: string;
      url: string;
      onClick?: () => void;
    } | null;
    bottomButtonObj: {
      target: "_self" | "_blank";
      text: string;
      color: string;
      backgroundColor: string;
      url: string;
      onClick?: () => void;
    } | null;
  };
}
