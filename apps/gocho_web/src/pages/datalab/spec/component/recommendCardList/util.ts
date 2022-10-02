import { setCarouselSettingDef } from "./type";

export const setCarouselSetting: setCarouselSettingDef = () => {
  return {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    swipeToSlide: true,
    slidesToShow: 4,
    centerPadding: "0px",
    speed: 400,
  };
};
