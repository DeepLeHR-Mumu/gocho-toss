import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import { dummyArrCreator } from "shared-util";
import { Divider } from "shared-ui/deeple-ds";

import { useJdArr } from "@/apis/jd";
import { JdCard } from "@/components/common/JdCard";

import { cssObj } from "./style";
import { setCarouselSetting } from "./util";

export const JdPart: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);

  const { data: jdDataObj } = useJdArr({
    order: "rand",
    filter: "valid",
    page: 1,
    size: 12,
  });

  if (!jdDataObj) {
    return (
      <section css={cssObj.sectionContainer}>
        <h2 css={cssObj.title}>
          오늘의 <span css={cssObj.colorPoint}>HOT</span> 공고
        </h2>
        <Slider {...setCarouselSetting} ref={sliderRef}>
          {dummyArrCreator(3).map((dummy) => {
            return <p key={`mainJobCard${dummy}`}>{dummy}</p>;
          })}
        </Slider>
      </section>
    );
  }

  return (
    <>
      <section css={cssObj.sectionContainer}>
        <div css={cssObj.titleContainer}>
          <h2 css={cssObj.title}>
            오늘의 <span css={cssObj.colorPoint}>HOT</span> 공고
          </h2>
          <div css={cssObj.buttonContainer}>
            <button
              css={cssObj.sliderButton}
              aria-label="이전 추천공고보기"
              type="button"
              onClick={() => {
                return sliderRef.current?.slickPrev();
              }}
            >
              <FiChevronLeft />
            </button>
            <button
              css={cssObj.sliderButton}
              aria-label="이전 추천공고보기"
              type="button"
              onClick={() => {
                return sliderRef.current?.slickNext();
              }}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div css={cssObj.sliderContainer}>
          <Slider {...setCarouselSetting} ref={sliderRef}>
            {jdDataObj?.jdDataArr.map((jd) => {
              return <JdCard key={jd.id} jd={jd} />;
            })}
          </Slider>
        </div>
      </section>
      <Divider />
    </>
  );
};
