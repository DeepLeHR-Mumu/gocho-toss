import { FunctionComponent, useRef, useState } from "react";
import Slider from "react-slick";

import { Layout } from "@component/layout";
import { SlideCard } from "./component/slideCard";
import { Control } from "./component/control";

import { carouselArr } from "./constant";
import { setCarouselSetting } from "./util";
import {
  mainCarouselWrapper,
  carouselContainer,
  invisibleHeading,
} from "./style";

export const MainCarouselPart: FunctionComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const sliderRef = useRef<Slider>(null);

  return (
    <div css={mainCarouselWrapper}>
      <Layout>
        <h1 css={invisibleHeading}>메인 페이지</h1>
        <section css={carouselContainer}>
          <Slider {...setCarouselSetting(setActiveIndex)} ref={sliderRef}>
            {carouselArr.map((slide) => {
              return (
                <SlideCard
                  key={slide.id}
                  imgSrc={slide.image}
                  title={slide.title}
                  dday={slide.dday}
                  dayTime={slide.dateTime}
                />
              );
            })}
          </Slider>

          {/* LATER 굳이 control이 앞으로 안나와도 될듯 */}
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
