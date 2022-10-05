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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
};
