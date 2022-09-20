import { FunctionComponent, useRef, useState } from "react";
import Slider from "react-slick";

import { Layout } from "@component/layout";
import { SlideCard } from "./component/slideCard";
import { Control } from "./component/control";

import { carouselArr } from "./constant";
import { setCarouselSetting } from "./util";
import { mainCarouselWrapper, carouselContainer } from "./style";

export const MainCarouselPart: FunctionComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const sliderRef = useRef<Slider>(null);

  return (
    <div css={mainCarouselWrapper}>
      <Layout>
        <section css={carouselContainer}>
          <Slider {...setCarouselSetting(setActiveIndex)} ref={sliderRef}>
            {carouselArr.map((slide) => {
              return (
                <SlideCard
                  key={`mainCarousel_${slide.id}`}
                  backgroundImage={slide.backgroundImage}
                  topDesc={slide.topDesc}
                  middleDesc={slide.middleDesc}
                  title={slide.title}
                  lastDesc={slide.lastDesc}
                  iconImage={slide.iconImage}
                  backgroundColor={slide.backgroundColor}
                />
              );
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
      </Layout>
    </div>
  );
};
