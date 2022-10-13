import { StaticImageData } from "next/image";

export interface BannerCardProps {
  title: string;
  desc: string;
  backgroundColor: string;
  link: string;
  iconSrc: StaticImageData;
}
