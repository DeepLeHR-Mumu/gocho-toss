import { Dispatch, SetStateAction } from "react";

interface setCarouselSettingDef {
  (setActiveIndex: Dispatch<SetStateAction<number>>): {
    dots: boolean;
    autoplay: boolean;
    arrows: boolean;
    autoplaySpeed: number;
    infinite: boolean;
    centerMode: boolean;
    speed: number;
    centerPadding: string;
    slidesToShow: number;
    slidesToScroll: number;
    afterChange: (current: number) => void;
  };
}

export const setCarouselSetting: setCarouselSettingDef = (setActiveIndex) => {
  return {
    dots: false,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    infinite: true,
    centerMode: true,
    speed: 500,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => {
      setActiveIndex(current + 1);
    },
  };
};
