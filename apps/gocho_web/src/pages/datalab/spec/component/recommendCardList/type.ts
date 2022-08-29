export interface setCarouselSettingDef {
  (): {
    dots: boolean;
    arrows: boolean;
    infinite: boolean;
    swipeToSlide: boolean;
    slidesToShow: number;
    centerPadding: string;
    speed: number;
  };
}
