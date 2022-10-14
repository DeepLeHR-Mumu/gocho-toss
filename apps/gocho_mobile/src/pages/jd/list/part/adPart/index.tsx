import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";

import { useJobArr } from "shared-api/job";
import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";

import { setCarouselSetting } from "./util";
import { carouselContainer } from "./style";
import { JobAdCard } from "../../component/jobAdCard";

export const AdPart: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);
  const limit = 5;

  const { data: jobDataArr, isLoading } = useJobArr({
    order: "recent",
    filter: "valid",
    limit,
  });

  if (!jobDataArr || isLoading) {
    return (
      <div>
        <InvisibleH2 title="오늘의 추천 공고" />
        <section css={carouselContainer}>
          <Slider {...setCarouselSetting} ref={sliderRef}>
            {dummyArrCreator(3).map((dummy) => {
              return <JobAdCard key={`jobAd${dummy}`} isSkeleton />;
            })}
          </Slider>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section css={carouselContainer}>
        <InvisibleH2 title="오늘의 추천 공고" />
        <Slider {...setCarouselSetting} ref={sliderRef}>
          {jobDataArr.jobDataArr.map((job) => {
            return <JobAdCard jobData={job} bgColor="#1553CD" key={`jobAd${job.id}`} />;
          })}
        </Slider>
      </section>
    </div>
  );
};
