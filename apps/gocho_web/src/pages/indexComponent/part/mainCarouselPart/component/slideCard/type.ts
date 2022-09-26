import { StaticImageData } from "next/image";

export interface SlideCardProps {
  topDesc: string;
  middleDesc: string;
  title: string;
  lastDesc: string;
  backgroundImage: StaticImageData;
  backgroundColor: string;
  iconImage?: StaticImageData;
  buttonColor?: string;
  buttonText?: string;
  buttonUrl?: string;
}
