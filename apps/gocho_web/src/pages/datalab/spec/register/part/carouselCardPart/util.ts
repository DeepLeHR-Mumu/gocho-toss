import { setCarouselSettingDef } from "./type";

export const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const setCarouselSetting: setCarouselSettingDef = {
  dots: false,
  autoplay: false,
  arrows: false,
  infinite: false,
  centerMode: true,
  touchMove: false,
  speed: 500,
  centerPadding: "0px",
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};
