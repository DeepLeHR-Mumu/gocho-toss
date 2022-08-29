import { setCarouselSettingDef } from "./type";

export const setCarouselSetting: setCarouselSettingDef = (setActiveIndex) => {
  return {
    dots: false,
    autoplay: false,
    arrows: false,
    infinite: false,
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
