interface setCarouselSettingDef {
  (): {
    centerPadding: string;
    speed: number;
    initialSlide: number;
    className: string;
    centerMode: boolean;
    slidesToShow: number;
    slidesToScroll: number;
    variableWidth: boolean;
  };
}

export const setCarouselSetting: setCarouselSettingDef = () => {
  return {
    centerPadding: "0px",
    speed: 500,
    initialSlide: 0,
    className: "slider variable-width center",
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
};
