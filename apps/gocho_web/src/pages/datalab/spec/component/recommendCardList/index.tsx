import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { useSpecArr } from "shared-api/spec";
import { SpecRecommendCard } from "@component/card/specRecommendCard";

import { setCarouselSetting } from "./util";
import { listContainer, sliderButtonContainer, sliderButton } from "./style";

export const RecommendCardList: FunctionComponent = () => {
  const { data: selectedSpecArr, isError, isLoading } = useSpecArr({ order: "eval" });
  const sliderRef = useRef<Slider>(null);

  if (!selectedSpecArr || isError || isLoading) {
    return <div>Loading or Error</div>;
  }

  return (
    <div css={listContainer}>
      <Slider {...setCarouselSetting()} ref={sliderRef}>
        {selectedSpecArr.map((selectedSpec) => {
          return <SpecRecommendCard key={selectedSpec.id} specData={selectedSpec} />;
        })}
      </Slider>
      <div css={sliderButtonContainer}>
        <button
          css={sliderButton}
          type="button"
          onClick={() => {
            return sliderRef.current?.slickPrev();
          }}
        >
          <FiChevronLeft />
        </button>

        <button
          css={sliderButton}
          type="button"
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
