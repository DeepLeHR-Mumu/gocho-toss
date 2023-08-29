export const setCarouselSetting = (isMobile: boolean) => {
  return {
    speed: 500,
    dots: isMobile,
    arrows: false,
    autoplay: false,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
};
