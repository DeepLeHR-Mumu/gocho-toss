export interface setCarouselSettingDef {
  dots: boolean;
  autoplay: boolean;
  arrows: boolean;
  infinite: boolean;
  centerMode: boolean;
  centerPadding: string;
  speed: number;
  slidesToShow: number;
  touchMove: boolean;
  slidesToScroll: number;
  adaptiveHeight: boolean;
}

export interface moveNextCardDef {
  (percent: number): void;
}
