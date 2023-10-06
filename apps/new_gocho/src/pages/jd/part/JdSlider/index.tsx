import { FunctionComponent, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";

import { dummyArrCreator } from "shared-util";

import { useJdArr } from "@/apis/jd";
import { JdCard } from "@/components/common/JdCard";

import { setCarouselSetting } from "./util";
import { cssObj } from "./style";
import { JdSliderProps } from "./type";
import { JD_ARR_SIZE, MAX_SLIDER_INDEX } from "./constant";

export const JdSlider: FunctionComponent<JdSliderProps> = ({ title, order, filter }) => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);

  const { data: jdDataObj } = useJdArr({
    order,
    filter,
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
    <section css={cssObj.sectionContainer}>
      <div css={cssObj.titleContainer}>
        <h2 css={cssObj.title}>{title}</h2>
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
            aria-label="이후 추천공고보기"
            type="button"
            onClick={handleNext}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
      <div css={cssObj.sliderContainer}>
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
            : dummyArrCreator(4).map((dummy) => <JdCard key={`jdSlider${dummy}`} />)}
        </Slider>
      </div>
    </section>
  );
};
