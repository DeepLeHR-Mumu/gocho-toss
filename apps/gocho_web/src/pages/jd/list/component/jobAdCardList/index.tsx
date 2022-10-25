import { FunctionComponent, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";

import { useJobArr } from "shared-api/job";
import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { JobAdCard } from "shared-ui/card/jobAdCard";
import { setCarouselSetting } from "./util";

import { listContainer, sliderButton, sliderButtonContainer } from "./style";

export const JobAdCardList: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);

  const { data: jobDataArr, isLoading } = useJobArr({
    order: "view",
    filter: "valid",
    offset: 0,
  });

  if (!jobDataArr || isLoading) {
    return (
      <div css={listContainer}>
        <Slider {...setCarouselSetting()} ref={sliderRef}>
          {dummyArrCreator(3).map((dummy) => {
            return <JobAdCard isSkeleton key={`JobAdCardSkeleton${dummy}`} />;
          })}
        </Slider>
      </div>
    );
  }

  return (
    <div css={listContainer}>
      <Slider {...setCarouselSetting()} ref={sliderRef}>
        {jobDataArr.jobDataArr.map((job) => {
          return <JobAdCard jobAdData={job} isMobile={false} key={`JobAdCard${job.id}`} />;
        })}
      </Slider>
      <div css={sliderButtonContainer}>
        <button
          css={sliderButton}
          aria-label="이전 추천공고보기"
          type="button"
          onClick={() => {
            return sliderRef.current?.slickPrev();
          }}
        >
          <FiChevronLeft />
        </button>

        <button
          css={sliderButton}
          aria-label="다음 추천공고보기"
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
