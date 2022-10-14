interface setCarouselSettingDef {
  (): {
    autoplay: boolean;
    arrows: boolean;
    infinite: boolean;
    initialSlide: number;
    className: string;
    centerMode: boolean;
    centerPadding: string;
    slidesToShow: number;
    slidesToScroll: number;
    variableWidth: boolean;
  };
}

export const setCarouselSetting: setCarouselSettingDef = () => {
  return {
    autoplay: false,
    arrows: false,
    infinite: true,
    initialSlide: 0,
    className: "slider variable-width center",
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
};
