import { FunctionComponent, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";

import { dummyArrCreator } from "shared-util";

import { useJdArr } from "@/apis/jd";
import { useGetDeviceType } from "@/globalStates";
import { JdCard } from "@/components/common/JdCard";

import { setCarouselSetting } from "./util";
import { cssObj } from "./style";
import { JdSliderProps } from "./type";

export const JdSlider: FunctionComponent<JdSliderProps> = ({ title, order, filter }) => {
  const sliderRef = useRef<Slider>(null);

  const { isMobile } = useGetDeviceType();
  const { data: jdDataObj } = useJdArr({
    order,
    filter,
    page: 1,
    size: 20,
  });

  return (
    <section css={cssObj.sectionContainer}>
      <div css={cssObj.titleContainer}>
        <h2 css={cssObj.title}>{title}</h2>
        <div css={cssObj.buttonContainer}>
          <button
            css={cssObj.sliderButton}
            aria-label="이전 추천공고보기"
            type="button"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <FiChevronLeft />
          </button>
          <button
            css={cssObj.sliderButton}
            aria-label="이전 추천공고보기"
            type="button"
            onClick={() => sliderRef.current?.slickNext()}
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
              : dummyArrCreator(4).map((dummy) => <JdCard key={`jdSlider${dummy}`} />)}
          </div>
        ) : (
          <Slider {...setCarouselSetting} ref={sliderRef}>
            {jdDataObj
              ? jdDataObj.jdDataArr.map((jd) => <JdCard key={jd.id} jd={jd} />)
              : dummyArrCreator(4).map((dummy) => <JdCard key={`jdSlider${dummy}`} />)}
          </Slider>
        )}
      </div>
    </section>
  );
};
