import { StaticImageData } from "next/image";

export interface SlideCardProps {
  imgSrc: StaticImageData;
  title: string;
  dday: number;
  dayTime: string;
}
