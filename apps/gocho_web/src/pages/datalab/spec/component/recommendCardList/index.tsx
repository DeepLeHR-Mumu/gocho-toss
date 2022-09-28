import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { useSpecArr } from "shared-api/spec";
import { SpecRecommendCard } from "@component/card/specRecommendCard";
import { dummyArrCreator } from "shared-util/dummyArrCreator";

import { setCarouselSetting } from "./util";
import { sliderButtonContainer, sliderButton } from "./style";

export const RecommendCardList: FunctionComponent = () => {
  const { data: selectedSpecArr, isLoading } = useSpecArr({ order: "eval" });
  const sliderRef = useRef<Slider>(null);

  if (!selectedSpecArr || isLoading) {
    return (
      <div>
        <Slider {...setCarouselSetting()} ref={sliderRef}>
          {dummyArrCreator(4).map((_) => {
            return <SpecRecommendCard key={`specRecommend_${_}`} isSkeleton />;
          })}
        </Slider>

        <div css={sliderButtonContainer}>
          <button
            css={sliderButton}
            type="button"
            aria-label="이전 스펙보기"
            onClick={() => {
              return sliderRef.current?.slickPrev();
            }}
          >
            <FiChevronLeft />
          </button>

          <button
            css={sliderButton}
            type="button"
            aria-label="다음 스펙보기"
            onClick={() => {
              return sliderRef.current?.slickNext();
            }}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Slider {...setCarouselSetting()} ref={sliderRef}>
        {selectedSpecArr.map((selectedSpec) => {
          return <SpecRecommendCard key={selectedSpec.id} specData={selectedSpec} />;
        })}
      </Slider>

      <div css={sliderButtonContainer}>
        <button
          css={sliderButton}
          type="button"
          aria-label="이전 스펙보기"
          onClick={() => {
            return sliderRef.current?.slickPrev();
          }}
        >
          <FiChevronLeft />
        </button>

        <button
          css={sliderButton}
          type="button"
          aria-label="다음 스펙보기"
          onClick={() => {
            return sliderRef.current?.slickNext();
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};
