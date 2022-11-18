import { FunctionComponent, useRef, useState } from "react";
import Slider from "react-slick";

import { SlideCard } from "./component/sliderCard";
import { Control } from "./component/control";
import { carouselArr } from "./constant";
import { wrapper } from "./style";

import { setCarouselSetting } from "./util";

export const MainCarouselPart: FunctionComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const sliderRef = useRef<Slider>(null);

  return (
    <section css={wrapper}>
      <Slider {...setCarouselSetting(setActiveIndex)} ref={sliderRef}>
        {carouselArr.map((slide) => {
          return <SlideCard carouselData={slide} key={`mainCarouselSlide${slide.title}`} />;
        })}
      </Slider>

      <Control
        allIndex={carouselArr.length}
        currentIndex={activeIndex}
        onSlickPrev={() => {
          return sliderRef.current?.slickPrev();
        }}
        onSlickNext={() => {
          return sliderRef.current?.slickNext();
        }}
      />
    </section>
  );
};
