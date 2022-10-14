import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";
import { useJobArr } from "shared-api/job";
import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { JobAdCard } from "shared-ui/card/jobAdCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { setCarouselSetting } from "./util";
import { listContainer, controlWrapper, buttonCSS } from "./style";

export const SuggestedJobCardList: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);

  const {
    data: jobDataArr,
    isLoading,
    isError,
  } = useJobArr({
    order: "view",
    filter: "valid",
    limit: 5,
  });

  if (!jobDataArr || isError || isLoading) {
    return (
      <div css={listContainer}>
        <Slider {...setCarouselSetting()} ref={sliderRef}>
          {dummyArrCreator(4).map((value) => {
            return <JobAdCard isSkeleton key={`JobAdCardSkeleton${value}`} />;
          })}
        </Slider>
      </div>
    );
  }
  return (
    <div css={listContainer}>
      <Slider {...setCarouselSetting()} ref={sliderRef}>
        {jobDataArr.jobDataArr.map((job) => {
          return <JobAdCard jobAdData={job} isMobile key={`JobAdCard${job.id}`} />;
        })}
      </Slider>

      <div css={controlWrapper}>
        <button type="button" css={buttonCSS} aria-label="이전 추천공고 이동" onClick={sliderRef.current?.slickPrev}>
          <BsChevronLeft />
        </button>

        <button type="button" css={buttonCSS} aria-label="다음 추천공고 이동" onClick={sliderRef.current?.slickNext}>
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
};