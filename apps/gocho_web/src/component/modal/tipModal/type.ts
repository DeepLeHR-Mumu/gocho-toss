import { Dispatch, SetStateAction } from "react";

export interface setCarouselSettingDef {
  (setActiveIndex: Dispatch<SetStateAction<number>>): {
    dots: boolean;
    autoplay: boolean;
    arrows: boolean;
    infinite: boolean;
    centerMode: boolean;
    speed: number;
    centerPadding: string;
    slidesToShow: number;
    slidesToScroll: number;
    afterChange: (current: number) => void;
  };
}
