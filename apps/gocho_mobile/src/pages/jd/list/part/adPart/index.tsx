import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";

import { useTopArr } from "shared-api/banner";
import { dummyArrCreator } from "shared-util";

import { setCarouselSetting } from "./util";
import { carouselContainer } from "./style";
import { JobAdCard } from "../../component/jobAdCard";

export const AdPart: FunctionComponent = () => {
  const sliderRef = useRef<Slider>(null);

  const { data: bannerDataArr } = useTopArr();

  if (!bannerDataArr) {
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
          {bannerDataArr.bannerDataArr.map((banner) => {
            return <JobAdCard jobData={banner} key={`jobAd${banner.id}`} />;
          })}
        </Slider>
      </section>
    </div>
  );
};
