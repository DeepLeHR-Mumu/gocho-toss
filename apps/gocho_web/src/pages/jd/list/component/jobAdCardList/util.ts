import { setCarouselSettingDef } from "./type";

export const setCarouselSetting: setCarouselSettingDef = () => {
  return {
    dots: false,
    arrows: false,
    autoplaySpeed: 6000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 3,
    speed: 500,
  };
};
