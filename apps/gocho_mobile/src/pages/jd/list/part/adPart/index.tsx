import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";

import { useJobArr } from "shared-api/job";
import { dummyArrCreator } from "shared-util/dummyArrCreator";

import { setCarouselSetting } from "./util";
import { carouselContainer } from "./style";
import { JobAdCard } from "../../component/jobAdCard";

export const AdPart: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);

  const { data: jobDataArr, isLoading } = useJobArr({
    order: "recent",
    filter: "valid",
    limit: 5,
  });

  if (!jobDataArr || isLoading) {
    return (
      <div>
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
        <Slider {...setCarouselSetting} ref={sliderRef}>
          {jobDataArr.jobDataArr.map((job) => {
            return <JobAdCard jobData={job} bgColor="#1553CD" key={`jobAd${job.id}`} />;
          })}
        </Slider>
      </section>
    </div>
  );
};
