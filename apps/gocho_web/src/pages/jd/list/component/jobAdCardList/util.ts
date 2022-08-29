import { setCarouselSettingDef } from "./type";

export const setCarouselSetting: setCarouselSettingDef = () => {
  return {
    dots: false,
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 3,
    centerPadding: "10px",
    speed: 400,
  };
};
