export interface changeOrderDef {
  (newId: number): void;
}

export interface setCarouselSettingDef {
  (): {
    infinite: boolean;
    slidesToShow: number;
    centerPadding: string;
    slidesToScroll: number;
    speed: number;
    responsive: [
      {
        breakpoint: number;
        settings: {
          infinite: boolean;
          slidesToShow: number;
        };
      }
    ];
  };
}
