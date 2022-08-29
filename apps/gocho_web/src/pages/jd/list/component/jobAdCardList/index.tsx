import { FunctionComponent, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";

import { JobAdCard } from "../jobAdCard";
import { setCarouselSetting } from "./util";
import { listContainer, sliderButtonContainer, sliderButton } from "./style";

export const JobAdCardList: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);

  return (
    <div css={listContainer}>
      <Slider {...setCarouselSetting()} ref={sliderRef}>
        <JobAdCard />
        <JobAdCard />
        <JobAdCard />
        <JobAdCard />
        <JobAdCard />
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
