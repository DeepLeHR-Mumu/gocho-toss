import { setCarouselSettingDef } from "./type";

export const setCarouselSetting: setCarouselSettingDef = () => {
  return {
    speed: 500,
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 3,
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
