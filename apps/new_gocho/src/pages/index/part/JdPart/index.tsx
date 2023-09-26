import { FunctionComponent, useRef, useState } from "react";
import Slider from "react-slick";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import { dummyArrCreator } from "shared-util";
import { Divider } from "shared-ui/deeple-ds";

import { useJdArr } from "@/apis/jd";
import { JdCard } from "@/components/common/JdCard";

import { useGetDeviceType } from "@/globalStates";
import { cssObj } from "./style";
import { setCarouselSetting } from "./util";
import { JD_ARR_SIZE, MAX_SLIDER_INDEX } from "./constant";

export const JdPart: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);

  const { isMobile } = useGetDeviceType();
  const { data: jdDataObj } = useJdArr({
    order: "recent",
    filter: "valid",
    page: 1,
    size: JD_ARR_SIZE,
  });

  const handlePrev = () => {
    const slideToMove = Math.min(currentSlide, 4);
    const nextSlide = currentSlide - slideToMove;
    if (nextSlide >= 0) {
      sliderRef.current?.slickGoTo(nextSlide);
    }
  };

  const handleNext = () => {
    const slideToMove = Math.min(MAX_SLIDER_INDEX - currentSlide, 4);
    const nextSlide = currentSlide + slideToMove;
    if (nextSlide <= MAX_SLIDER_INDEX) {
      sliderRef.current?.slickGoTo(nextSlide);
    }
  };

  return (
    <>
      <section css={cssObj.sectionContainer}>
        <div css={cssObj.titleContainer}>
          <h2 css={cssObj.title}>
            오늘의 <span css={cssObj.colorPoint}>HOT</span> 공고
          </h2>
          <div css={cssObj.buttonContainer}>
            <button
              css={cssObj.sliderButton(currentSlide === 0)}
              aria-label="이전 추천공고보기"
              type="button"
              onClick={handlePrev}
            >
              <FiChevronLeft />
            </button>
            <button
              css={cssObj.sliderButton(currentSlide >= MAX_SLIDER_INDEX)}
              aria-label="이전 추천공고보기"
              type="button"
              onClick={handleNext}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div css={cssObj.sliderContainer}>
          {isMobile ? (
            <div css={cssObj.cardContainer}>
              {jdDataObj
                ? jdDataObj.jdDataArr.map((jd) => <JdCard key={jd.id} jd={jd} />)
                : dummyArrCreator(4).map((dummy) => <JdCard key={`mainJobCard${dummy}`} />)}
            </div>
          ) : (
            <Slider
              {...setCarouselSetting}
              ref={sliderRef}
              beforeChange={(_oldIndex, newIndex) => {
                setIsDragging(true);
                if (newIndex <= MAX_SLIDER_INDEX) {
                  setCurrentSlide(newIndex);
                }
              }}
              afterChange={() => {
                setIsDragging(false);
              }}
            >
              {jdDataObj
                ? jdDataObj.jdDataArr.map((jd) => <JdCard key={jd.id} jd={jd} blockClick={isDragging} />)
                : dummyArrCreator(4).map((dummy) => <JdCard key={`mainJobCard${dummy}`} />)}
            </Slider>
          )}
        </div>
      </section>
      <Divider />
    </>
  );
};
