import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";

import { useJobArr } from "shared-api/job";
import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { JobSmallCard } from "shared-ui/card/jobSmall";
import { setCarouselSetting } from "./util";
import { listContainer } from "./style";

export const JobCardList: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);

  const {
    data: jobDataArr,
    isLoading,
    isError,
  } = useJobArr({
    order: "recent",
    filter: "valid",
    limit: 9,
  });

  if (!jobDataArr || isError || isLoading) {
    return (
      <div css={listContainer}>
        <Slider {...setCarouselSetting()} ref={sliderRef}>
          {dummyArrCreator(4).map((value) => {
            return <JobSmallCard key={`JobSmallCardSkeleton${value}`} isSkeleton />;
          })}
        </Slider>
      </div>
    );
  }
  return (
    <div css={listContainer}>
      <Slider {...setCarouselSetting()} ref={sliderRef}>
        {jobDataArr.jobDataArr.map((job) => {
          return <JobSmallCard key={`jobSmallCard_${job.id}`} jobData={job} isMobile />;
        })}
      </Slider>
    </div>
  );
};
