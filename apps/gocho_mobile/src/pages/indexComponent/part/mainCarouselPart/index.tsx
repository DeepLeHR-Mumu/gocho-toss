import { FunctionComponent, useRef, useState } from "react";
import Slider from "react-slick";

import { SlideCard } from "./component/sliderCard";
import { Control } from "./component/control";
import { slideArr } from "./constant";
import { wrapper } from "./style";

import { setCarouselSetting } from "./util";

export const MainCarouselPart: FunctionComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const sliderRef = useRef<Slider>(null);

  return (
    <section css={wrapper}>
      <Slider {...setCarouselSetting(setActiveIndex)} ref={sliderRef}>
        {slideArr.map((slide) => {
          return <SlideCard carouselData={slide} key={`mainCarouselSlide${slide.title}`} />;
        })}
      </Slider>

      <Control
        allIndex={slideArr.length}
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
