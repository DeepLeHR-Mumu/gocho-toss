import { StaticImageData } from "next/image";

export interface SlideCardProps {
  topDesc: string;
  middleDesc: string;
  title: string;
  lastDesc: string;
  backgroundImage: StaticImageData;
  iconImage?: StaticImageData;
  backgroundColor: string;
}
